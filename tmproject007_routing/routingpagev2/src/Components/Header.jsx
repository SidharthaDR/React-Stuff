import Home from "./home/Home"
import About from './about/About'
import Contact from './contact/Contact'
import { Link, NavLink, useNavigate } from "react-router"
import { navLinkClass } from "./CustomNavLink"
import { use } from "react"

function Header() {
    // We will use useNavigate function in a button, to navigate on click.
    // useNavigate also replace history stack by accept 2nd argument {replace:true}
    const navigate = useNavigate();
  return (
    <nav className="shadow-lg px-2 py-2">
        <ul className="flex justify-center gap-3 ">

            <NavLink to="/" 
             className= {navLinkClass}
            ><li>Home</li> </NavLink>

            <NavLink to="about" 
            className= {navLinkClass}
             ><li>About</li> </NavLink>

            <NavLink to="contact" 
            className= {
                ({isActive}) => `${isActive? "text-red-500":"text-gray-800"}`
             }
             ><li>Contact</li> </NavLink>

             <button 
             onClick={() => navigate("/contact",{replace:false})} //see above cmts
             className="bg-black text-white px-2 rounded-lg">Get Started</button>

        </ul>
    </nav>
  )
}

export default Header