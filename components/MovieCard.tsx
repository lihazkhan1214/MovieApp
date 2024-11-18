'use client';
import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import logo from "../public/imdb.png";
import Link from "next/link";

function MovieCard({ carddata }: any) {
  return (
    <div className="flex flex-col w-full max-w-56 h-full mx-auto shadow-xl rounded-lg m-2">
      <Link href={`/${carddata.name}`}>
        {/* Image Section */}
        <div className="h-64 w-full flex items-center justify-center bg-gray-100 rounded-t-lg">
          <img
            src={carddata.imageUrl}
            alt="movie-poster"
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>

        {/* Movie Info Section */}
        <div className="flex flex-col flex-grow justify-between px-2 mt-1">
          <div className="flex flex-row justify-between">
            <div className="flex items-center gap-1">
              <Image src={logo} alt="logo" className="w-7 h-7" />
              <h1 className="text-xs font-semibold">{carddata.vote}</h1>
            </div>
            <div className="flex flex-row items-center">
              <FaPlay className="w-[10px] h-[10px] text-yellow-300" />
              <h1 className="text-xs font-semibold">{carddata.duration}</h1>
            </div>
          </div>

          {/* Movie Title (Name) Section */}
          <h1 className="bg-gray-200 w-full max-w-40 mx-auto rounded-lg text-center mt-3 mb-2 text-sm font-semibold line-clamp-2 ">
            {carddata.name}
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
