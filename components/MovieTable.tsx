import Link from "next/link";
import React from "react";
import {
  MdLocalMovies,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

function MovieTable() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center w-full max-w-5xl mx-auto bg-gray-50 shadow-md border rounded-lg overflow-hidden mb-10 mt-10">
      <div className="flex flex-col justify-center w-full max-w-md mx-auto bg-gray-50 shadow-md rounded-lg overflow-hidden m-4">
        <h1 className="text-start text-blue-800 text-lg font-semibold p-3">
          Regal Cinema
        </h1>
        <div className="bg-white flex items-center p-3 hover:bg-gray-100 transition-colors">
          <h1 className="flex-shrink-0 text-gray-600 text-sm sm:text-base">
            16:00
          </h1>
          <MdLocalMovies className="mx-2 text-xl text-gray-600" />
          <p className="flex-grow text-gray-800">The Matrix</p>
        </div>
        <h1 className="flex flex-row item-center justify-end mt-3 p-3 text-right text-blue-800 font-bold">
          <span className="text-sm sm:text-base mx-1">Regal Cinema</span>
          <Link href="/program/regal-cinema">
            <span className="flex items-center underline text-gray-600 hover:text-red-600 cursor-pointer">
              program for today{" "}
              <MdOutlineKeyboardDoubleArrowRight className="ml-1" />
            </span>
          </Link>
        </h1>
      </div>
      <div className="flex flex-col justify-center w-full max-w-md mx-auto bg-gray-50 shadow-md rounded-lg overflow-hidden m-4">
        <h1 className="text-start text-blue-800 text-lg font-semibold p-3">
          Cinema Palace
        </h1>
        <div className="bg-white flex items-center p-3 hover:bg-gray-100 transition-colors">
          <h1 className="flex-shrink-0 text-gray-600 text-sm sm:text-base">
            18:15
          </h1>
          <MdLocalMovies className="mx-2 text-xl text-gray-600" />
          <p className="flex-grow text-gray-800">Interstellar</p>
        </div>
        <h1 className="flex flex-row item-center justify-end mt-3 p-3 text-right text-blue-800 font-bold">
          <span className="text-sm sm:text-base mx-1">Cinema Palace</span>
          <Link href="/program/cinema-palace">
            <span className="flex items-center underline text-gray-600 hover:text-red-600 cursor-pointer">
              program for today{" "}
              <MdOutlineKeyboardDoubleArrowRight className="ml-1" />
            </span>
          </Link>
        </h1>
      </div>
      <div className="flex flex-col justify-center w-full max-w-md mx-auto bg-gray-50 shadow-md rounded-lg overflow-hidden m-4">
        <h1 className="text-start text-blue-800 text-lg font-semibold p-3">
          Uptown Theater
        </h1>
        <div className="bg-white flex items-center p-3 hover:bg-gray-100 transition-colors">
          <h1 className="flex-shrink-0 text-gray-600 text-sm sm:text-base">
            20:45
          </h1>
          <MdLocalMovies className="mx-2 text-xl text-gray-600" />
          <p className="flex-grow text-gray-800">Parasite</p>
        </div>
        <h1 className="flex flex-row item-center justify-end mt-3 p-3 text-right text-blue-800 font-bold">
          <span className="text-sm sm:text-base mx-1">Uptown Theater</span>
          <Link href="/program/uptown-cinema">
            <span className="flex items-center underline text-gray-600 hover:text-red-600 cursor-pointer">
              program for today{" "}
              <MdOutlineKeyboardDoubleArrowRight className="ml-1" />
            </span>
          </Link>
        </h1>
      </div>
      <div className="flex flex-col justify-center w-full max-w-md mx-auto bg-gray-50 shadow-md rounded-lg overflow-hidden m-4">
        <h1 className="text-start text-blue-800 text-lg font-semibold p-3">
          Downtown Cinema
        </h1>
        <div className="bg-white flex items-center p-3 hover:bg-gray-100 transition-colors">
          <h1 className="flex-shrink-0 text-gray-600 text-sm sm:text-base">
            22:00
          </h1>
          <MdLocalMovies className="mx-2 text-xl text-gray-600" />
          <p className="flex-grow text-gray-800">The Godfather</p>
        </div>
        <h1 className="flex flex-row item-center justify-end mt-3 p-3 text-right text-blue-800 font-bold">
          <span className="text-sm sm:text-base mx-1">Downtown Cinema</span>
          <Link href="/program/downtown-cinema">
            <span className="flex items-center underline text-gray-600 hover:text-red-600 cursor-pointer">
              program for today{" "}
              <MdOutlineKeyboardDoubleArrowRight className="ml-1" />
            </span>
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default MovieTable;
