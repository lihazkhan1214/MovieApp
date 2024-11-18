import { NextRequest, NextResponse } from "next/server";
import { fromURL } from "cheerio";
import { Movie } from "@/app/models/Movie";
import { Channel } from "@/app/models/Channel";
import { connectToMongoDB } from "@/lib/db";
import { Genre } from "@/app/models/Genre";

const urls = {
  nasloviMovies: "https://naslovi.net/tv-program/filmovi/",
  nasloviSeries: "https://naslovi.net/tv-program/serije/#now",
  krasticaSeries: "https://www.krstarica.com/tv/?tip=serije",
  krasticaMovies: "https://www.krstarica.com/tv/?tip=filmovi",
};

async function scrapeKrstarica(seriesUrl: string, type: string) {
  try {
    const $ = await fromURL(seriesUrl);
    const collection: any[] = [];
    const uniqueSet = new Set(); // To track unique combinations of time, title, and channel

    $("tr.extvs-past-progr").each((i: any, el: any) => {
      if (collection.length >= 20) {
        return false; // Stop the loop after collecting 20 items
      }

      const time = $(el).find(".extvs-table1-time h3").text().trim();
      const channel = $(el).find(".extvs-table1-time .sub-tt a").text().trim();
      const title = $(el).find(".extvs-table1-programme h3").text().trim();
      const description = $(el)
        .find(".extvs-table1-programme .sub-tt")
        .text()
        .trim()
        .split("...")[0]
        .trim();
      const additionalDetails = $(el)
        .find(".extvs-table1-programme p")
        .first()
        .text()
        .trim();
      const imgUrl =
        $(el).find("img.extvs-table1-image").attr("data-cfsrc") ||
        $(el).find("noscript img.extvs-table1-image").attr("src");

      const genreText = $(el)
        .find(".extvs-table1-programme p")
        .first()
        .text()
        .trim();
      // const genre = genreText.includes("-")
      //   ? genreText
      //       .split("-")[1]
      //       .trim()
      //       .split(",")
      //       .map((g: string) => g.trim())
      //   : [];
      const genre = genreText.includes("-")
        ? genreText
            .split("-")[1]
            .trim()
            .split(",")
            .map((g: string) => g.trim().split(" ")[0])
        : [];

      const cast = $(el)
        .find(".extvs-table1-programme p")
        .eq(1)
        .text()
        .replace("Uloge: ", "")
        .split(",")
        .map((actor: string) => actor.trim());

      const yearMatch = additionalDetails.match(/\((\d{4})\)/);
      const year = yearMatch ? yearMatch[1] : "";

      const uniqueKey = `${time}-${title}-${channel}`; // Create a unique key using time, title, and channel

      // Check if the combination already exists in the set
      if (!uniqueSet.has(uniqueKey)) {
        uniqueSet.add(uniqueKey); // Add the unique combination to the set

        const item = {
          time,
          channel,
          title,
          description,
          additionalDetails,
          imgUrl,
          genre,
          cast,
          year,
          type: type,
        };

        collection.push(item); // Add to collection only if it's unique
      }
    });

    return collection;
  } catch (error) {
    console.error("Error scraping krstarica.com series:", error);
    return [];
  }
}

// async function bulkInsertIfNotExists(
//   model: any,
//   items: { name: string; type?: string }[],
//   field: string = "name"
// ) {
//   try {
//     const existingItems = await model.find({
//       $or: items.map((item) => ({
//         [field]: item.name,
//         ...(item.type && { type: item.type }),
//       })),
//     });
//     const existingNames = existingItems.map((item: any) => item[field]);

//     const newItems = items.filter((item) => !existingNames.includes(item.name));
//     if (newItems.length > 0) {
//       await model.insertMany(newItems, { ordered: false });
//       console.log(
//         `Inserted ${newItems.length} new items into ${model.modelName}`
//       );
//     }
//   } catch (error) {
//     console.error(`Error inserting into ${model.modelName}:`, error);
//   }
// }

async function bulkInsertIfNotExists(
  model: any,
  items: { name: string; type?: string }[],
  field: string = "name"
) {
  try {
    // Find existing items based on 'name' and, if present, 'type'
    const existingItems = await model.find({
      $or: items.map((item) => {
        const query: any = { [field]: item.name };
        if (item.type) {
          query.type = item.type; // Only add type to query if it exists
        }
        return query;
      }),
    });

    // Create a map of existing 'name' and 'type' combinations
    const existingMap = existingItems.map((item: any) => ({
      name: item[field],
      type: item.type,
    }));

    // Filter out new items that match both 'name' and 'type'
    const newItems = items.filter((item) => {
      if (item.type) {
        // If 'type' exists, check both 'name' and 'type'
        return !existingMap.some(
          (existing) =>
            existing.name === item.name && existing.type === item.type
        );
      } else {
        // If 'type' does not exist, check only 'name'
        return !existingMap.some((existing) => existing.name === item.name);
      }
    });

    // Insert new items if there are any
    if (newItems.length > 0) {
      await model.insertMany(newItems, { ordered: false });
      console.log(
        `Inserted ${newItems.length} new items into ${model.modelName}`
      );
    }
  } catch (error) {
    console.error(`Error inserting into ${model.modelName}:`, error);
  }
}

async function fetchMovieDetailsFromTMDB(title: string) {
  const apiKey = process.env.TMDB_API_KEY;
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
    title
  )}`;

  const searchResponse = await fetch(searchUrl);
  const searchData = await searchResponse.json();

  if (searchData.results && searchData.results.length > 0) {
    const movieId = searchData.results[0].id;
    const externalIdsUrl = `https://api.themoviedb.org/3/movie/${movieId}/external_ids?api_key=${apiKey}`;
    const externalIdsResponse = await fetch(externalIdsUrl);
    const externalIdsData = await externalIdsResponse.json();

    if (externalIdsData.imdb_id) {
      return { movieDetails: searchData.results[0], externalIdsData };
    }
  }
  return null;
}

// Fetch IMDb rating from OMDB
async function fetchImdbRating(imdbId: string) {
  const apiKey = process.env.OMDB_API_KEY;
  const url = `http://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  return data && data.imdbRating ? parseFloat(data.imdbRating) : null;
}

async function fetchMovieDetailsAndImdbRating(title: string) {
  const detailsPromise = fetchMovieDetailsFromTMDB(title);

  const details = await detailsPromise;

  if (!details) return { tmdbDetails: null, imdbRating: null };

  const { movieDetails, externalIdsData: tmdbDetails } = details;
  const imdbID = tmdbDetails.imdb_id;

  const imdbRatingPromise = imdbID ? fetchImdbRating(imdbID) : null;

  const imdbRating = await imdbRatingPromise;

  return {
    tmdbDetails: movieDetails,
    imdbRating: imdbRating !== null ? imdbRating : null,
  };
}

async function saveMovieOrSeries(data: any[], type: string) {
  try {
    const channels = [...new Set(data.map((item) => item.channel))];
    const genres = [...new Set(data.flatMap((item) => item.genre))].map(
      (name) => ({ name, type })
    );
    await Promise.all([
      bulkInsertIfNotExists(
        Channel,
        channels.map((name) => ({ name }))
      ),
      bulkInsertIfNotExists(Genre, genres),
    ]);

    const moviesToInsert = [];

    for (const item of data) {
      // console.log(item);
      const { title, time, channel, description, imgUrl, genre, cast, year } =
        item;

      const movie = await Movie.findOne({
        title: title,
        time: time,
        channel: channel,
      });

      if (movie) continue;

      const { tmdbDetails, imdbRating } = await fetchMovieDetailsAndImdbRating(
        title
      );

      moviesToInsert.push({
        title,
        time,
        channel, // Now storing the name directly
        description,
        imgUrl,
        type,
        genre: genre.join(", "), // Store genres as a comma-separated string
        cast: cast.join(", "),
        year: year ? parseInt(year) : null,
        imdb: imdbRating ? imdbRating : 0,
        en: tmdbDetails,
      });
    }

    if (moviesToInsert.length > 0) {
      await Movie.insertMany(moviesToInsert);
      console.log(
        `Inserted ${moviesToInsert.length} ${type}s to the database.`
      );
    }
  } catch (error) {
    console.error(`Error saving movie or series data:`, error);
  }
}
export async function GET(request: NextRequest) {
  try {
    await connectToMongoDB();

    const [nasloviMovies, nasloviSeries] = await Promise.all([
      scrapeKrstarica(urls.krasticaMovies, "movie"),
      scrapeKrstarica(urls.krasticaSeries, "series"),
    ]);

    await Promise.all([
      saveMovieOrSeries(nasloviMovies, "movie"),
      saveMovieOrSeries(nasloviSeries, "series"),
    ]);

    return NextResponse.json("Data scraped and saved successfully", {
      status: 200,
    });
  } catch (error) {
    console.error("Error in scraping process:", error);
    return NextResponse.json("Error in scraping process", {
      status: 500,
    });
  }
}

const updateGenres = async () => {
  // Fetch all genres
  const genres = await Genre.find();

  // Object to store unique genres by type
  const uniqueGenres: any = {};

  for (const genre of genres) {
    // Extract the first word of the genre
    const newGenreName = genre.name.split(" ")[0];

    // Generate a key based on genre type and genre name
    const key = `${newGenreName}-${genre.type}`;

    // Check if a genre with the same name and type already exists
    if (!uniqueGenres[key]) {
      // If not, add it to the uniqueGenres object
      uniqueGenres[key] = genre;

      // Update the genre with the new single-word name if it has changed
      if (newGenreName !== genre.name) {
        await Genre.updateOne(
          { _id: genre._id },
          { $set: { name: newGenreName } }
        );
      }
    } else {
      // If a duplicate genre is found, remove it from the database
      await Genre.deleteOne({ _id: genre._id });
    }
  }

  console.log("Genres updated successfully with no duplicates.");
};
const updateMovies = async () => {
  // Fetch all cleaned genres from the genre collection
  const genres = await Genre.find();

  // Create a map of valid genres (first word) based on their type (movie/series)
  const genreMap = genres.reduce((acc, genre) => {
    acc[genre.name] = genre.type; // Store the genre name and type
    return acc;
  }, {});

  // Fetch all movies
  const movies = await Movie.find();

  for (const movie of movies) {
    // Split the movie's genres and get the first word of each
    const movieGenres = movie.genre
      .split(",")
      .map((g: any) => g.trim().split(" ")[0]);

    // Filter genres that exist in the genre collection
    const updatedGenres = movieGenres.filter((genre: any) => genreMap[genre]);

    // Ensure no duplicate genres exist
    const uniqueGenres = [...new Set(updatedGenres)];

    // Update the movie with the valid, unique genres
    await Movie.updateOne(
      { _id: movie._id },
      { $set: { genre: uniqueGenres.join(", ") } }
    );
  }

  console.log("Movies updated successfully with consistent genres.");
};

const updateGenresAndMovies = async () => {
  try {
    await Genre.collection.dropIndex("name_1");
    await updateGenres();

    // Step 2: Update movies with cleaned-up genres
    await updateMovies();

    console.log("Genres and Movies updated successfully.");
  } catch (err) {
    console.error("Error updating genres and movies:", err);
  }
};

// Run the update process
// updateGenresAndMovies();

export const revalidate = 0;
export const maxDuration = 60;
