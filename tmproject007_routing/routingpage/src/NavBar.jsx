import React from 'react'
import { Link, NavLink } from 'react-router';

function NavBar() {
    //=============== for checking reload ===============
    if (window.performance) {
        console.info("window.performance works fine on this browser");
      }
      console.info(performance.navigation.type);
      if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        console.info( "This page is reloaded" );
      } else {
        console.info( "This page is not reloaded");
      }
    //=============== for checking reload ===============
  return (
    <>
    <nav className='shadow-lg text-black p-3 mb-6'>
        <ul className='flex gap-3 justify-center'>
            
            <Link to= "/"><li>Home</li></Link>
            <Link to= "/about"><li>About</li></Link>
            <Link to= "/contact"><li>Contacts</li></Link>
            <Link to= "/contact/number"><li>Number</li></Link>

        <button className='bg-slate-500 text-white px-1 rounded-lg hover:bg-slate-700'>button</button>
        </ul>
    </nav>
    </>
  )
}

export default NavBar