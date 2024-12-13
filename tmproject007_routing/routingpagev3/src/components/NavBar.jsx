import {NavLink} from 'react-router'
function NavBar() {
  return (
    <div className="flex justify-center p-4 ">
      <ul className="flex gap-3">
        <NavLink to = "home"><li>Home</li></NavLink>
        <NavLink to = "about"><li>About</li></NavLink>
        <NavLink to = "projects"><li>Projects</li></NavLink>
      </ul>
      
    </div>

  )
}

export default NavBar