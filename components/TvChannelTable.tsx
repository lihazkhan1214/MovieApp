import React from 'react';
// import { MdLocalMovies, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import schedule from '@/data/timingandmovie'

function TvChannelTable() {
  return (
    <div className='flex flex-col justify-center w-full max-w-2xl mx-auto bg-gray-50 shadow-md border rounded-lg overflow-hidden'>
        <filter className='flex flex-row items-center bg-white justify-between shadow-sm'>
        <h1 className='text-center text-white text-lg  px-2 py-1  bg-blue-900 m-4 rounded-md w-full max-w-48'>Film</h1>
        <h1 className='text-center text-white text-lg  px-2 py-1 bg-blue-900 m-4 rounded-md w-full max-w-48'>Tv Channel</h1>
        <select className='text-center text-gray-400 shadow-inner text-lg border px-2 py-1  m-4 rounded-md w-full max-w-48'>
        <option selected>24Kitchen</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
        </select>
        </filter>
        <h1 className='text-start text-black text-lg font-semibold  mx-4 my-2 '>Time</h1>

    { schedule.map((item, index)=>(
        <div key={index}>
                <div className='bg-white flex items-center gap-20 p-3 hover:bg-gray-100 transition-colors'>
            <h1 className='flex-shrink-0 text-gray-600 text-sm sm:text-base '>{item.time}</h1>
            <p className='flex-grow text-gray-800'>{item.title}</p>
        </div>

        </div>

    ))}

        
    </div>
  );
}

export default TvChannelTable;
