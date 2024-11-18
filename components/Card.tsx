import React from 'react'
import Image from 'next/image'
import { FaPlay } from "react-icons/fa";
import logo from '../public/imdb.png'


function Card({carddata}:any) {
  return (
    <div className='flex flex-col w-full max-w-44 mx-auto  shadow-xl rounded-b-lg m-2'>
        <img src={carddata.imageUrl} alt="movie-poster" />
        <div className='flex flex-row justify-between px-2 mt-1 '>
        
        <div className='flex items-center gap-1 '>
        <Image src={logo} alt="logo" className='w-7 h-7' />
      
        <h1 className='text-xs font-semibold'>{carddata.vote}</h1>
        </div>

        <div className='flex flex-row items-center'>
            <FaPlay className='w-[10px] h-[10px] text-yellow-300'/>
            <h1 className='text-xs font-semibold'>Tralier</h1>
        </div>        
        </div>
        
        <h1 className='bg-green-300 w-full max-w-40 mx-auto rounded-md text-center mt-3 mb-2 text-sm font-semibold '>Add to watchlist </h1>

        </div>
  )
}

export default Card
