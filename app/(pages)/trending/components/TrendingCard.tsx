import React from "react";
import logo from "@/public/imdb.png";
import Image from "next/image";
import movies from "@/data/moviedata";

function TrendingCard() {
  return (
    <>
      {movies.map((movie: any) => (
        <div
          key={movie.id}
          className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto gap-2 mb-4 border-t border-gray-400  "
        >
          <p className="md:hidden  text-black text-2xl font-bold rounded-xl p-4 mt-4 mx-2 w-20 text-center">
                #{movie.id}{" "}
              </p>
          <img src={movie.imageUrl} alt="" className="w-44 mt-1 mb-1 mx-6" />
          <div className="flex flex-col p-4 ">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-2xl">{movie.name}</h1>
              <p className="hidden md:block bg-gray-600 text-white text-2xl font-bold rounded-xl p-4 mt-4 mx-2 w-20 text-center">
                #{movie.id}{" "}
              </p>
            </div>
            <div className="flex flex-row items-center w-12 gap-2">
              <Image src={logo} alt="logo" className="w-10 h-10 " />
              <h1 className="text-sm font-semibold"> {movie.vote} </h1>
            </div>
            <p className="mt-2 mb-2">
              <span className="font-bold">Critics Consensus: </span>
              {movie.criticsConsensus}
            </p>
            <p>
              <span className="font-bold">Synopsis:</span> {movie.synopsis}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default TrendingCard;
