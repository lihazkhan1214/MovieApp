'use client';
import React from 'react';
import { useRouter } from 'next/router';
import movies from '@/data/moviedata'; // Assuming your movie data is here

const Overview = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the specific movie by its ID
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{movie.name}</h1>
      <img src={movie.imageUrl} alt={movie.name} className="w-full max-w-md mb-4" />
      <p className="text-lg font-semibold">Rating: {movie.vote}</p>
      <p className="text-lg font-semibold">Duration: {movie.duration}</p>
      <p className="text-lg">{movie.description}</p>
    </div>
  );
};

export default Overview;
