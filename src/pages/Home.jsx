import React from 'react'
import HomeCards from '../components/HomeCards'
import Taste from '../components/Taste'
import FoodGallery from '../components/FoodGallery'
import ResIntor from '../components/ResIntor'

const Home = () => {
  return (
    <div className='w-[100%] h-fit'>
     <ResIntor />
      {/* here first cards starts */}
      <div className="bg-gray-100 w-full">
        <div className="container mx-auto h-56 pt-20">
          <h1 className='uppercase font-bold md:text-4xl text-2xl text-center mb-6'>RELAX, UNWIND AND ENJOY</h1>
          <p className='text-center md:text-xl text-base font-semibold'>Food, design, and environment all create a pleasant experience.</p>
        </div>
        <HomeCards />
      </div>
      {/* here first cards ends */}
      <Taste />
      <FoodGallery />
    </div>
  )
}

export default Home