import React from "react";
// import movies from "@/data/moviedata";
import MovieCard from "./MovieCard";
import axios from 'axios'
async function MovieCards() {
  const movies = await (await axios.get('/api/movies')).data
  console.log(movies)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
      {movies.slice(0, 10).map((movie: any, index: any) => (
        <div key={index}>
          <MovieCard carddata={movie} />
        </div>
      ))}
    </div>
  );
}

export default MovieCards;
