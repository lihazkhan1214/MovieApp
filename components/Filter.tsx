"use client";
import { useEffect, useState } from "react";
import React from "react";
import { FaSortAmountUpAlt, FaSortAmountDownAlt } from "react-icons/fa";
import Tab from "@/components/TabForMovieAndSeries";
import axios from "axios";

interface Genre {
  _id: string;
  name: string;
}

interface Props {
  movieType: string;
  setMovieType: (type: string) => void;
  selectedGenreId: string;
  setSelectedGenreId: (id: string) => void;
  setSelectedChannels: (state: []) => void;
  setTotalChannels: (state: []) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
  setSearchQuery: (quer: string) => void; // Setter for rating order
  searchQuery: string
  ratingOrder: boolean; // Managed from outside, true = "high-to-low", false = "low-to-high"
  toggleSortRatingOrder: () => void; // Function to toggle the state
}

function Filter({
  movieType,
  setMovieType,
  selectedGenreId,
  setSelectedGenreId,
  sortOrder,
  setSortOrder,
  ratingOrder,
  toggleSortRatingOrder,
  setSearchQuery,
  searchQuery,
  setSelectedChannels,
  setTotalChannels

}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]); // State to store fetched genres
  const [filters, setFilters] = useState({
    searchTerm: "",
    genre: selectedGenreId || "all", // Default to selectedGenreId
    rating: "all",
    channel: "all",
  });



  // Fetch genres from /api/genres when the component mounts
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.post("/api/genres", {
          type: movieType
        });
        setGenres(response.data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, [setGenres, movieType]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the visibility state
  };

  const resetFilters = () => {
    setFilters({
      searchTerm: "",
      genre: "all",
      rating: "all",
      channel: "all",
    });
    setSelectedGenreId("all"); // Reset selectedGenreId
    setSortOrder(""); // Reset sort order to newest
    setSearchTerm("")
    setSearchQuery("")
    setSelectedChannels([])
    setTotalChannels([])


    if (ratingOrder) {
      toggleSortRatingOrder()
    }
  };

  const handleChangeMovieType = (type: string) => {
    resetFilters()
    setMovieType(type);

  }



  return (
    <div className="md:p-4 my-1">
      <div className="flex flex-col justify-center w-full max-w-6xl bg-white mx-auto p-2 md:p-4 md:rounded-lg shadow-md">
        <h1 className="text-4xl text-green-700 items-center justify-center mx-auto flex">
          Find The Best Movies/Series On Last 7 Days
        </h1>
        <div className="flex flex-col justify-center items-center mx-auto w-full">
          <h1 className="flex justify-center md:justify-start mx-4 p-4 text-3xl font-bold text-green-800">
            Search Movies/Series
          </h1>
          <div className="flex flex-row gap-2 md:mx-4 md:p-4 w-1/2 items-center justify-center mx-auto">
            <input
              type="text"
              className="bg-gray-100 border border-gray-300 w-1/2 min-w-[250px] sm:min-w-[350px] p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter movie name"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setSearchQuery(e.target.value)
              }

              }
            />
            <button onClick={() => { setSearchQuery(searchTerm) }} className="bg-green-800 text-white p-2 rounded-md mx-2 hover:bg-green-600 transition">
              Search
            </button>
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <Tab movieType={movieType} setMovieType={handleChangeMovieType} setSearch={setSearchQuery} />
        </div>

        <div className="flex flex-wrap justify-center md:justify-start md:gap-8 md:mx-8 mt-4">
          <div className="flex flex-col w-32 m-1 md:w-44">

            <button
              onClick={toggleSortRatingOrder}
              className={`flex items-center justify-center my-2 md:mt-9 text-white text-xs md:text-sm p-2 ${ratingOrder ? "bg-green-800" : "bg-gray-500"
                } rounded-md focus:outline-none`}
            >
              {ratingOrder ? (
                <>
                  <FaSortAmountDownAlt className="mr-2 h-5 w-5" /> IMDb Rating
                </>
              ) : (
                <>
                  <FaSortAmountUpAlt className="mr-2 h-5 w-5" /> IMDb Rating
                </>
              )}
            </button>

          </div>

          <div className="flex flex-col w-32 m-1 md:w-44">
            <h1 className="hidden md:block text-lg text-gray-600">Genre</h1>
            <select
              className="my-2 text-sm p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 overflow-y-auto"
              value={filters.genre}
              onChange={(e) => {
                setFilters({ ...filters, genre: e.target.value });
                setSelectedGenreId(e.target.value); // Update selectedGenreId in parent
              }}
              style={{ maxHeight: "150px" }} // Add scroll for a large number of genres
            >
              <option value="all">All Genres</option>
              {genres.map((genre) => (
                <option key={genre._id} value={genre.name}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-32 m-1 md:w-44">
            {/* <h1 className="hidden md:block text-lg text-gray-600">Sort by Year</h1>
            <select
              className="my-2 text-gray-700 text-sm p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)} // Update sort order from props
            >
              <option value="newest">Newest to Oldest</option>
              <option value="oldest">Oldest to Newest</option>
            </select> */}
            <h1 className="hidden md:block text-lg text-gray-600">Sort by Year</h1>
            <button
              onClick={() => setSortOrder(sortOrder === 'newest' ? '' : 'newest')}
              className={`flex items-center justify-center my-2 text-white text-sm p-2 bg-gray-100 border border-gray-300 rounded-md  ${sortOrder == "newest" ? "bg-green-800" : "bg-gray-500"
                }`}
            >
              {sortOrder === 'newest' ? (
                <>
                  <FaSortAmountDownAlt className="mr-2 h-5 w-5" /> Newest
                </>
              ) : (
                <>
                  <FaSortAmountUpAlt className="mr-2 h-5 w-5" /> Newest
                </>
              )}
            </button>
          </div>

          <button
            onClick={resetFilters}
            className="text-red-500 p-2 md:w-28 rounded-md justify-center md:justify-start flex mx-8 items-end"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
