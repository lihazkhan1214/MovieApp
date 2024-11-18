import React from 'react';
import Image from 'next/image';

// Example movies data
const movies = {
  name: "Inception",
  imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
  vote: 8.8,
  reviews: "1.2K reviews",
  description: "A skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, is given a chance at redemption if he can successfully perform an inception.",
  releaseYear: "2010",
  duration: "2h 28m",
  cast: [
    { name: "Leonardo DiCaprio", imageUrl: "https://m.media-amazon.com/images/I/71fH7+QdbNL._AC_SY679_.jpg" },
    { name: "Joseph Gordon-Levitt", imageUrl: "https://m.media-amazon.com/images/I/71cQ5aRO-nL._AC_SY679_.jpg" },
    { name: "Elliot Page", imageUrl: "https://m.media-amazon.com/images/I/71BeET7jTTL._AC_SY679_.jpg" }
  ]
};

const moviesDetail = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: movies Image */}
        <div className="flex-1 md:w-1/2 mb-6 md:mb-0">
          <div className="relative w-full h-80">
            <Image
              src={movies.imageUrl}
              alt={movies.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Side: movies Details */}
        <div className="flex-1 md:w-1/2 md:pl-6">
          <h1 className="text-3xl font-bold mb-4">{movies.name}</h1>
          <div className="flex items-center mb-4">
            <span className="text-xl font-semibold mr-4">Rating: {movies.vote}</span>
            <span className="text-md">{movies.reviews}</span>
          </div>
          <p className="mb-4">{movies.description}</p>
          <div className="mb-4">
            <div className="flex justify-between">
              <span className="font-semibold">Release Year:</span>
              <span>{movies.releaseYear}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Duration:</span>
              <span>{movies.duration}</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Cast</h2>
          <div className="flex space-x-4">
            {movies.cast.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-2">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <span>{member.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default moviesDetail;
  