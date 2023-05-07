import React from 'react'
import wallpaper from '../assets/images/wal2.jpg'
import wallpaper2 from '../assets/images/wal1.jpg'
import wallpaper3 from '../assets/images/wal3.jpg'
import Slider from './Slider.jsx';


const Header = () => {
      const slides = [wallpaper, wallpaper2, wallpaper3 ];
  return (
    <div>
        {/* The header image starts here */}
        <div className='w-[100%]'>
            <Slider>
                {slides.map((s) => (
                <img src={s} className="bg-cover bg-center" alt="The Kabul resturant" />
                ))}
            </Slider>
            <div className="absolute inset-0 flex flex-col md:items-center items-center md:justify-center justify-start p-4 text-white">
            <h3 className='md:h3 text-xl'>Enjoy Traditional & Healthy Food</h3>
            <h1 className='md:text-7xl text-3xl font-bold'>Kabul Resturant</h1>
            </div>
        </div>
    </div>
  )
}

export default Header