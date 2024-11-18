import React from "react";

const MixTable: React.FC = () => {
  const data = [
    {
      genre: "Action",
      name: "Interstellar",
      year: 2021,
      rating: 7.8,
      date: "08/09/2024",
      tv_channel: "Al Jazeerah",
      time: "05:03"
    },
    {
      genre: "Drama",
      name: "Batman",
      year: 2020,
      rating: 8.5,
      date: "07/09/2024",
      tv_channel: "MTV",
      time: "11:03"
    },
    {
      genre: "Comedy",
      name: "Spider Man",
      year: 2019,
      rating: 6.9,
      date: "18/09/2024",
      tv_channel: "RT",
      time: "01:03"
    },
    {
      genre: "Horror",
      name: "Iron Man",
      year: 2022,
      rating: 7.0,
      date: "28/09/2024",
      tv_channel: "Sony",
      time: "14:03"
    },
    {
      genre: "Sci-Fi",
      name: "Inception",
      year: 2010,
      rating: 8.8,
      date: "15/09/2024",
      tv_channel: "National Geographic",
      time: "21:00"
    },
    {
      genre: "Romance",
      name: "The Notebook",
      year: 2004,
      rating: 7.9,
      date: "20/09/2024",
      tv_channel: "HBO",
      time: "18:45"
    },
    {
      genre: "Thriller",
      name: "The Matrix",
      year: 1999,
      rating: 8.7,
      date: "25/09/2024",
      tv_channel: "Star Movies",
      time: "22:15"
    },
    {
      genre: "Fantasy",
      name: "Harry Potter",
      year: 2001,
      rating: 7.6,
      date: "30/09/2024",
      tv_channel: "Disney",
      time: "10:30"
    }
  ];
  

  return (
    <div className="">
      {/* <h1 className="text-3xl text-center font-bold mb-6 text-gray-800">
        Movie List
      </h1> */}
      <table className="w-full max-w-6xl mx-auto table-auto border-collapse bg-gray-100 shadow-lg">
        <thead>
          <tr className="bg-green-800 text-white">
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Time</th>
            <th className="p-4 text-left">Genre</th>
            <th className="p-4 text-center">Year</th>
            <th className="p-4 text-center">IMDb Rating</th>
            <th className="p-4 text-center">TV Kanal</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={` hover:bg-gray-200 transition-colors border-t border-gray-900 `}
            >
              <td className="p-4 text-gray-700">{row.date}</td>
              <td className="p-4 text-gray-700">{row.name}</td>
              <td className="p-4 text-gray-700">{row.time}</td>
              <td className="p-4 text-gray-700">{row.genre}</td>
              <td className="p-4 text-center text-gray-700">{row.year}</td>
              <td className="p-4 text-center text-gray-700">{row.rating}</td>
              <td className="p-4 text-center text-gray-700">
                {row.tv_channel}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MixTable;
