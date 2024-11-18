import Card from "@/components/MovieCard";
import movies from "@/data/moviedata";
import React from "react";

const MoviesList = () => {
  return (
    <div>
      <>
        <h1 className="text-4xl text-green-700 py-3 items-center justify-center mx-auto  flex">
          Top Movies
        </h1>
        <div className="flex flex-wrap items-center w-full max-w-4xl space-x-4 mx-auto ">
          {movies.map((movie: any, index: any) => (
            <div key={index}>
              <Card carddata={movie} />
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default MoviesList;
