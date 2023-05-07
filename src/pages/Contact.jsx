import React from 'react'
import { aboutCardDetails } from '../mockData/MockData'


const Contact = () => {
  return (
    <div className='pb-72 md:pb-0'>
      <div className="container mx-auto h-screen grid md:grid-cols-2 grid-cols-1 gap-2 ">
        <div className=''>
          <h1 className="text-5xl font-bold pt-6">Feel free to drop us a line</h1>
          <p className="text-xl pt-6">We would love to hear from you</p>
          <div className=''>
            <input className='w-full py-1 px-2 my-4 border-2 border-blue-700 rounded-md' type="text" placeholder='Name' />
            <input className='w-full py-1 px-2 my-4 border-2 border-blue-700 rounded-md' type="email" placeholder="Email" />
            <input className='w-full py-1 px-2 my-4 border-2 border-blue-700 rounded-md' type="number" placeholder='Phone: No' />
            <textarea className='w-full py-1 px-2 my-4 border-2 border-blue-700 rounded-md' placeholder='Message' name="" id="" cols="50" rows="3"></textarea>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <button className='bg-blue-950 text-white px-[150px] py-1 mb-4 my-8 hover:bg-blue-700 hover:px-[130px] scroll-smooth duration-300'>Submit</button>
          </div>
        </div>
        <div className='flex items-center justify-center'>Here we should add google map</div>
      </div>
      <div className='container mx-auto h-80 md:mb-0 mb-56 grid md:grid-cols-3 grid-cols-1 gap-4'>
            {aboutCardDetails.map(({ id, title, detail }) => (
                <div className='shadow shadow-slate-700 border border-blue-700 scroll-smooth duration-500 bg-gray-50 h-64 rounded-md md:mb-0' key={id}>
                  <p className='text-center mt-10 mb-4 px-2 text-base'>{detail}</p>
                  <h3 className='h3 text-center text-blue-700'>{title}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Contact