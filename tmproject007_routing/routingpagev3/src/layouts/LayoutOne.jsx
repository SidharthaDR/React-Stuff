import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {Outlet} from 'react-router'

function LayoutOne() {
  return (
    <>
    <NavBar/>
    <div className='flex justify-center items-end mt-10 text-[50px] font-mono'>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default LayoutOne