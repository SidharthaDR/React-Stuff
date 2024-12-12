import Home from "./home/Home"
import About from './about/About'
import Contact from './contact/Contact'
import { Link } from "react-router"

function Header() {
  return (
    <nav className="shadow-lg px-2 py-2">
        <ul className="flex justify-center gap-3 ">
            <Link to="/" ><li>Home</li> </Link>
            <Link to="about" ><li>About</li> </Link>
            <Link to="contact" ><li>Contact</li> </Link>
        </ul>
    </nav>
  )
}

export default Header