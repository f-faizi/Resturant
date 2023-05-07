import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineCopyright } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";
import logo from '../assets/images/logo.png'


const Footer = () => {
  return (
  <footer className="bg-gray-800 w-full h-fit grid md:grid-cols-2 grid-cols-1">
      <div className=' flex flex-col items-center justify-center'>
        <img src={logo} className='w-[150px] h-[150px]' alt="The logo" />
        <h3 className='h3 text-white'>Enjoy Traditional & Healthy Food</h3>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex items-center justify-center gap-4'>
          <span className="text-red-600 cursor-pointer"><AiFillFacebook size={40} /></span>
          <span className="text-red-600 cursor-pointer"><AiOutlineEnvironment size={40}/></span>
          <span className="text-red-600 cursor-pointer"><AiOutlineInstagram size={40}/></span>
          <span className="text-red-600 cursor-pointer"><AiOutlineTwitter size={40} /></span>
        </div>
        <div className='flex md:mt-20 mt-10'>
          <h3 className="text-white">Copyright</h3>
          <span className='mt-2 px-1 text-white'><AiOutlineCopyright /></span>
          <h3 className="text-white">2022 Kabul Restaurant - Designed by</h3>
            <h3 className="text-red-600 font-extrabold px-2">3 Idiots</h3>
        </div>
      </div>
  </footer>
  )
}

export default Footer;