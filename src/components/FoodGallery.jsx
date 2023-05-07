import React from 'react'
import { smallGallery } from '../mockData/MockData'

const FoodGallery = () => {

  return (
    <div className="bg-gray-200 w-[100%] py-10 h-fit">
      <div className='py-10'>
        <h2 className="text-center font-signature font-extrabold md:text-6xl text-4xl mt-8">Let's look our dishes on gallery!</h2>
      </div>
      <div className="w-[100%] grid md:grid-cols-3 grid-cols-1">
        {smallGallery.map(({ id, path }) => (
          <div key={id} className='w-[90%] py-10 mx-auto flex items-center justify-center'>
          <img src={path} alt="The Food" />
        </div>
        ))}
      </div>
      <div className='flex items-center justify-center'>
        <button className='bg-blue-950 text-white px-10 py-1 mb-4 hover:bg-blue-700 hover:px-5 scroll-smooth duration-300'>View full gallery</button>
      </div>
    </div>
  )
}

export default FoodGallery