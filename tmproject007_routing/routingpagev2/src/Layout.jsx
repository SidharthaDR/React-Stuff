import React from 'react'
import Header from "./Components/Header.jsx"
import Home from './Components/home/Home'
import Contact from './Components/contact/Contact'
import About from './Components/about/About'

import { Route, Routes } from 'react-router'

function Layout() {
  return (
    <>

      <Header/>
    <div className='text-[5rem]'>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/about" element = {<About/>}/>
      </Routes>
    </div>
    </>
  )
}

export default Layout