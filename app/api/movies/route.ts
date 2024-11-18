import { Movie } from "@/app/models/Movie";
import { connectToMongoDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import dayjs from "dayjs"; // For easier date handling

connectToMongoDB();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      channels,
      type,
      genre,
      sortBy,
      title,
      page = 1,
      limit = 15,
      ratingOrder,
    } = body;

    const sevenDaysAgo = dayjs().subtract(7, "day").startOf("day").toDate();
    const todayEnd = dayjs().endOf("day").toDate();

    const pipeline: any[] = [];

    pipeline.push({
      $match: {
        type,
        channel: { $in: channels },
        createdAt: { $gte: sevenDaysAgo, $lte: todayEnd },
      },
    });

    if (genre && genre !== "all") {
      pipeline.push({
        $match: { genre: { $regex: new RegExp(genre, "i") } },
      });
    }

    if (title) {
      pipeline.push({
        $match: { title: { $regex: new RegExp(title, "i") } }, // Case-insensitive
      });
    }

    const sort: any = {};
    if (ratingOrder) {
      sort.imdb = -1;
      // pipeline.push({
      //   $match: { imdb: { $ne: 0 } },
      // });
    } else if (sortBy === "oldest") {
      sort.year = 1;
    } else if (sortBy === "newest") {
      sort.year = -1;
    } else {
      sort.createdAt = -1;
    }
    pipeline.push({ $sort: sort });

    const totalMovies = await Movie.aggregate([
      ...pipeline,
      { $count: "total" },
    ]);

    const skip = (page - 1) * limit;
    pipeline.push({ $skip: skip });
    pipeline.push({ $limit: limit });

    pipeline.push({
      $project: {
        title: 1,
        year: 1,
        genre: 1,
        imdb: 1,
        channel: 1,
        imgUrl: 1,
        createdAt: 1,
        description: 1,
        time: 1,
        cast: 1,
      },
    });

    const movies = await Movie.aggregate(pipeline);

    const totalMoviesCount = totalMovies.length > 0 ? totalMovies[0].total : 0;
    const totalPages = Math.ceil(totalMoviesCount / limit);

    return NextResponse.json(
      {
        movies,
        totalMovies: totalMoviesCount,
        totalPages,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching movies:", error);

    // Return an error response in case of failure
    return NextResponse.json("Something Went Wrong.", { status: 500 });
  }
}
