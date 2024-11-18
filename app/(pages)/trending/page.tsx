import React from 'react'
import TrendingHero from './components/TrendingHero'
import TrendingCarousal from './components/TrendingCarousal'
import TrendingCard from './components/TrendingCard'

function page() {
  return (
    <div>
        <TrendingCarousal/>
        <TrendingHero/>
        <TrendingCard/>
    </div>
  )
}

export default page