import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const SharedLayout = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default SharedLayout