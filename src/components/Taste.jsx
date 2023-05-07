import React from 'react'
import { tasteData } from '../mockData/MockData'

const Taste = () => {
  return (
      <div className="bg-slate-50 py-10 w-full h-fit">
          <div className="container text-center mx-auto pt-10">
              <h1 className='md:text-5xl text-3xl font-bold'>FOLLOW YOUR TASTE</h1>
              <p className="text-lg mt-6">A restaurant with a menu that will excite your taste buds.</p>
          </div>
          <div className=' container mx-auto grid md:grid-cols-3 grid-cols-1 py-10 mt-11 gap-4'>
              {tasteData.map(({ id, path, name }) => (
                <div key={id} className="flex flex-col items-center">
                  <img src={path} alt="The Food" />
                      <h2 className="text-2xl font-bold text-blue-600 p-4">{name}</h2>
                  <button className='bg-blue-700 text-white px-4 py-1 mb-4 hover:bg-blue-900 hover:px-5 scroll-smooth duration-300'>Show more</button>
                </div>
              ))}
          </div>
          <div className='flex flex-col items-center'>
              <button className='bg-blue-950 text-white px-10 py-1 mb-4 hover:bg-blue-700 hover:px-5 scroll-smooth duration-300'>View our full menu</button>
          </div>

    </div>
  )
}

export default Taste