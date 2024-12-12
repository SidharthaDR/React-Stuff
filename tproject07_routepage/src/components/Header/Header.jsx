import React from 'react'
import { Link, NavLink } from 'react-router'

function Header() {
  return (
    <div>
      <nav>
        <div className='flex bg-slate-400 justify-center gap-3'>
          <NavLink to = "/" 
          className={
            ({isActive}) => `${isActive? "bg-orange-200 text-blue-800" : "text-gray-700  hover:text-blue-600 "} font-mono`
          }
          >
              <button id="Home"> MyHome </button>
          </NavLink>
        

          <NavLink to = "/about"
          className= {
            ({isActive}) => ` ${isActive ? "bg-orange-200 text-blue-700" : "text-gray-700 hover:text-blue-600"} font-mono `
          }
          >
              <button id="About"> About </button>
          </NavLink>

        </div>

      </nav>
    </div>
  )
}

export default Header