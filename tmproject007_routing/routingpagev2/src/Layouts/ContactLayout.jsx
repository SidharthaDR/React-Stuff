import React from 'react'
import Contact from '../Components/contact/Contact.jsx'
import {Outlet} from 'react-router'
const ContactLayout = () => {
  return (
    <div>
        <Contact/>
        <Outlet></Outlet>
    </div>
  )
}

export default ContactLayout