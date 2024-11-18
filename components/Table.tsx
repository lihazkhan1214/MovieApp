"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import logo from "../public/imdb.png";
import HomePageLoader from "@/app/loading";
import { debounce } from "lodash";

const ITEMS_PER_PAGE = 15;

interface Props {
  channels: string[];
  movieType: string;
  selectedGenreId: string;
  sortOrder: string;
  searchQuery: string;
  ratingOrder: boolean;
  totalChannels: string[];
}

function Table({
  channels,
  movieType,
  selectedGenreId,
  sortOrder,
  searchQuery,
  ratingOrder,
  totalChannels,
}: Props) {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalMovies, setTotalMovies] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [detailsVisibility, setDetailsVisibility] = useState<{
    [key: number]: boolean;
  }>({});
  const [isMobile, setIsMobile] = useState(false); // New state to track screen size

  const tableRef = useRef<HTMLDivElement | null>(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Debounced search query handler
  const debouncedFetchMovies = useCallback(
    debounce(async (page: number) => {
      setFetching(true);
      try {
        const response = await axios.post("/api/movies", {
          channels,
          type: movieType,
          genre: selectedGenreId,
          sortBy: sortOrder,
          title: searchQuery,
          page,
          limit: ITEMS_PER_PAGE,
          ratingOrder: ratingOrder,
        });

        setMovies(response.data.movies);
        setTotalPages(response.data.totalPages);
        setTotalMovies(response.data.totalMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setFetching(false);
        setLoading(false);
      }
    }, 500),
    [channels, movieType, selectedGenreId, searchQuery]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [channels, movieType, selectedGenreId, sortOrder, searchQuery, ratingOrder]);

  useEffect(() => {
    setLoading(true);
    if (totalChannels.length > 0) {
      if (searchQuery) {
        setNotFound(false);
        debouncedFetchMovies(currentPage);
        return debouncedFetchMovies.cancel;
      } else {
        setNotFound(false);
        fetchMovies(currentPage);
      }
    }
  }, [channels, movieType, selectedGenreId, sortOrder, currentPage, ratingOrder, searchQuery]);

  const fetchMovies = async (page: number) => {
    setFetching(true);
    try {
      const response = await axios.post("/api/movies", {
        channels,
        type: movieType,
        genre: selectedGenreId,
        sortBy: sortOrder,
        title: "",
        page,
        limit: ITEMS_PER_PAGE,
        ratingOrder: ratingOrder,
      });

      setMovies(response.data.movies);
      setTotalPages(response.data.totalPages);
      setTotalMovies(response.data.totalMovies);
      handleNotFound(response.data.totalMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setFetching(false);
      setLoading(false);
    }

    function handleNotFound(movieslength: number) {
      setNotFound(movieslength < 1);
    }
  };

  const toggleDetailsVisibility = (index: number) => {
    setDetailsVisibility((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      scrollToTop();
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      scrollToTop();
    }
  };

  return (
    <div ref={tableRef} className="w-full">
      {loading && <HomePageLoader />}
      {!loading && (
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            fetching ? "opacity-50" : "opacity-100"
          }`}
        >
          {notFound && (
            <div className="flex flex-col justify-center items-center py-10">
              <img
                src={"/no-movie.webp"}
                alt={"No movie found"}
                className="w-full max-w-xs md:max-w-md"
              />
              <p className="text-gray-600 text-lg font-semibold mt-4">
                Sorry, no movies found.
              </p>
              <p className="text-gray-500 text-sm">
                Try adjusting your search or filters.
              </p>
            </div>
          )}

          {movies.map((item: any, index) => (
            <div
              key={index}
              className="flex flex-row items-start justify-between gap-2 w-full max-w-6xl mx-auto p-4"
            >
              <div className="flex flex-col w-28">
                <h1 className="font-bold">{item?.time}</h1>
                <p className="text-blue-500">{item?.channel}</p>
                <p className="text-blue-700">
                  {new Date(item?.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="flex flex-col-reverse md:flex-row w-full gap-2 justify-between">
                <div className="flex-grow">
                  <h1 className="font-bold">{item?.title}</h1>
                  {item?.imdb > 0 && (
                    <div className="flex items-center gap-1">
                      <Image src={logo} alt="logo" className="w-7 h-7" />
                      <h1 className="text-xs font-semibold">{item.imdb}</h1>
                    </div>
                  )}
                  <p className="my-2">{item?.description}</p>
                  
                  {isMobile && (
                    <button
                      onClick={() => toggleDetailsVisibility(index)}
                      className="text-blue-500 mt-2"
                    >
                      {detailsVisibility[index] ? "Hide Details" : "Show Details"}
                    </button>
                  )}
                  
                  {(!isMobile || detailsVisibility[index]) && (
                    <>
                      <p className="font-extralight my-1">
                        {item.title} {item?.year ? `(${item.year})` : ""}
                      </p>
                      <p className="font-extralight">{item?.cast}</p>
                    </>
                  )}
                </div>

                <div className="flex-shrink-0">
                  <img
                    src={item.imgUrl ? item.imgUrl : "/placeholder.jpg"}
                    alt={item.title}
                    className="w-full md:w-64"
                  />
                </div>
              </div>
            </div>
          ))}

          {movies?.length > 0 && (
            <div className="flex flex-col justify-center items-center mt-4 max-w-6xl mx-auto">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 bg-green-700 text-white rounded-md ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Previous
                </button>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 bg-green-700 text-white rounded-md ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Next
                </button>
              </div>
              <span className="text-sm my-4">
                Page {currentPage} of {totalPages}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Table;
