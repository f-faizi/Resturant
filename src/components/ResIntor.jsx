import React from 'react'
import resturant_image from '../assets/images/kabul.png'

const ResIntor = () => {
  return (
      <div className="w-full">
        <div className="bg-gray-200 w-full py-8">
        <div className='container flex md:flex-row flex-col items-center justify-between mx-auto'>
          <div className=" md:w-[48%] w-full h-[90%]">
            <h4 className='uppercase font-extrabold mb-6 text-red-700'>introduction to Kabul resturant</h4>
            <h2 className='text-black mb-4 font-extrabold text-4xl font-signature '>Traditional Afghani Favors under one roof!</h2>
            <img src={resturant_image} alt="" />
          </div>
          <div className=" md:w-[48%] w-full h-[90%] pt-56">
            <p className="leading-5 text-lg text-justify pb-8">A restaurant doesn’t just have to be a place; it has a character. Kabul restaurant started in 1983, a good restaurant with a pleasing ambience, quality and delicious food. Being one of the most famous restaurants in F7 Markaz, Islamabad provides a variety of appetizer’s, delicious Afghani food, and signature service with a presentation style.</p>
            <button className="bg-blue-700 text-white px-4 py-1 mb-4 hover:bg-blue-900 hover:px-5 scroll-smooth duration-300">Read more</button>
          <div className=' text-blue-700 text-2xl w-[100%] h-28 shadow shadow-gray-500 flex flex-col items-center pt-4 bg-gray-100'>
            <p>Need info? Call us</p>
            <p>0773-40-20-90</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResIntor