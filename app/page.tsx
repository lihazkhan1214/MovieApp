"use client";
import Filter from "@/components/Filter";
import Table from "@/components/Table";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import TvChannels from "@/components/TvChannels";
import React from "react";

export default function Home() {
  // danish updated code
  // update deployment 
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState<string>("");
  const [movieType, setMovieType] = useState<string>("movie");
  const [sortOrder, setSortOrder] = useState(""); // New state to simulate loading
  const [searchQuery, setSearchQuery] = useState(""); // New state to simulate loading
  const [ratingOrder, setRatingOrder] = useState<boolean>(false);
  const [totalChannels, setTotalChannels] = useState<string[]>([]);

  // Toggle the sorting order
  const toggleSortRatingOrder = () => {
    setRatingOrder((prevOrder) => !prevOrder);
  };

  return (
    <>
      {/* changes Updated */}
      
      
      <NavBar />

      <div className="flex justify-center mx-auto max-w-7xl">
        <TvChannels
          selectedChannels={selectedChannels}
          setSelectedChannels={setSelectedChannels}
          type={movieType}
          setTotalChannels={setTotalChannels}
        />

        <div className="w-full md:w-[90%] items-center justify-center mx-auto">
          {/* Filter should remain visible */}
          <Filter
            movieType={movieType}
            setMovieType={setMovieType}
            selectedGenreId={selectedGenreId}
            setSelectedGenreId={setSelectedGenreId}
            setSelectedChannels={setSelectedChannels}
            setTotalChannels={setTotalChannels}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            ratingOrder={ratingOrder}
            toggleSortRatingOrder={toggleSortRatingOrder}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
          />

          <Table
            channels={selectedChannels}
            movieType={movieType}
            selectedGenreId={selectedGenreId}
            sortOrder={sortOrder}
            searchQuery={searchQuery}
            ratingOrder={ratingOrder}
            totalChannels={totalChannels}
          />
        </div>

        <div className="w-[15%] hidden md:block">
          {/* Conditionally render loader for the Image */}

          <Image
            src="/ads.PNG"
            alt="ad"
            className="w-64 h-[500px] mt-32 sticky top-10"
            width={300}
            height={100}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
