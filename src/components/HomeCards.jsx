import React from 'react'
import { cardDetails } from '../mockData/MockData'

const HomeCards = () => {
  return (
      <div className='md:pb-0 pb-72'>
         <div className='container mx-auto h-80 md:mb-0 mb-56 grid md:grid-cols-3 grid-cols-1 gap-4'>
            {cardDetails.map(({ id, title, detail }) => (
                <div className='shadow shadow-slate-700 border-b-2 hover:border-b-8 scroll-smooth duration-500 border-blue-700 bg-gray-50 h-56 rounded-ss-[30px] rounded-ee-[50px]' key={id}>
                    <h3 className='h3 text-center text-blue-700 pt-4'>{title}</h3>
                    <p className='text-center'>{detail}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HomeCards