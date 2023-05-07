import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import navLinks from '../mockData/MockData.jsx'
import { logData } from '../mockData/MockData.jsx';

const NavBar = () => {
  const [nav, setNav] = useState(false);


  return (
    <>
          {/* The Navbar start here */}
      <nav className="w-[100%] px-4 py-2 bg-slate-800 text-white flex justify-between fixed opacity-80">
        <div className='hidden md:flex gap-8'>
          {navLinks.map(({ id, link, text }) => (
            <NavLink key={id} to={link} className='hover:bg-blue-800 px-[0.5rem] rounded-[5%] scroll-smooth duration-500' style={({isActive}) => { return{ color: isActive ? 'white' : 'white'}}}>{text}</NavLink>
          ))}
        </div>
        <div className='hidden md:flex gap-8 pr-4'>
          {logData.map(({ id, link, text }) => (
            <NavLink key={id} to={link} className='hover:bg-blue-800 px-[0.5rem] rounded-[5%] scroll-smooth duration-500' style={({isActive}) => { return{ color: isActive ? 'white' : 'white'}}}>{text}</NavLink>
          ))}
        </div>

        <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer'>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-800 opacity-80'>
            {navLinks.map(({ id, link, text }) => (
            <NavLink key={id} to={link} onClick={()=> setNav(!nav)} className='hover:bg-blue-800 px-[0.5rem] my-4 rounded-[5%] scroll-smooth duration-500' style={({isActive}) => { return{ color: isActive ? 'white' : 'white'}}}>{text}</NavLink>
            ))}
          </div>
        )}
      </nav>
      {/* The navbar ends here */}
      </>
  )
}

export default NavBar;