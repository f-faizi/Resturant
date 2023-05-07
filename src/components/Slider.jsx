import React from 'react'
import { useState } from 'react'
import { FaChevronCircleLeft } from 'react-icons/fa'
import { FaChevronCircleRight } from 'react-icons/fa'

const Slider = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
   const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  return (
  <div className="overflow-hidden relative">
      <div className='flex transition-transform ease-out duration-500'
        style={{ Transform: `translateX(-${curr * 100}%)` }}
      >{slides}</div>
      <div className="absolute inset-0 flex items-center justify-between p-4 text-white">
        <button onClick={prev}><FaChevronCircleLeft size={50} /></button>
        <button onClick={next}><FaChevronCircleRight size={50} /></button>
      </div>
  </div>
      )
}

export default Slider