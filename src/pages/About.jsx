import React from 'react'
import ResIntor from '../components/ResIntor'
import { aboutCardDetails } from '../mockData/MockData'

const About = () => {
  return (
    <div className=" md:py-0 pb-72">
      <ResIntor />
      <div className="container mx-auto h-fit py-20">
          <h1 className='uppercase font-bold md:text-4xl text-2xl text-center mb-6'>TESTIMONIALS</h1>
          <p className='text-center md:text-xl text-base font-semibold'>We are always been to serve our clients because they are the source of our success.</p>
        </div>
      <div className='container mx-auto h-80 md:mb-0 mb-56 grid md:grid-cols-3 grid-cols-1 gap-4'>
            {aboutCardDetails.map(({ id, title, detail }) => (
                <div className='shadow shadow-slate-700 border-b-2 hover:border-b-8 scroll-smooth duration-500 border-blue-700 bg-gray-50 h-64 rounded-md md:mb-0' key={id}>
                  <p className='text-center mt-10 mb-4 px-2 text-base'>{detail}</p>
                  <h3 className='h3 text-center text-blue-700'>{title}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default About