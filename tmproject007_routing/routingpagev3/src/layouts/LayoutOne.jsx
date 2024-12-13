import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {Outlet} from 'react-router'

function LayoutOne() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    {/* <h1>My layout</h1> */}
    </>
  )
}

export default LayoutOne