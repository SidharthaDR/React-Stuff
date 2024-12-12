import React from 'react'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact/Contact'
import Number from './pages/Contact/Number'

function Layout() {
  return (
    <>
    <NavBar/>
    <div className='text-center text-[5rem]'>
    <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='about' element = {<About/>} />
        <Route path='contact' element = {<Contact/>} />
        <Route path='contact/number' element = {<Number/>} />
    </Routes>
    </div>
    </>
  )
}

export default Layout