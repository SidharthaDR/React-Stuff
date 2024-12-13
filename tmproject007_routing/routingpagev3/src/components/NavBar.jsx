import {NavLink} from 'react-router'
function NavBar() {
  const isActiveFunc = ({isActive}) => (isActive?"text-red-500":"")
  return (
    <div className="flex justify-center p-4 shadow-xl m-2">
      <ul className="flex gap-3">
        <NavLink to = "home"
        className={`${isActiveFunc}`}
        ><li>Home</li></NavLink>

        <NavLink to = "about"
        className={`${isActiveFunc}`}
        ><li>About</li></NavLink>
        
        <NavLink to = "projects"
        className={`${isActiveFunc}`}
        ><li>Projects</li></NavLink>


      
      </ul>
      
    </div>

  )
}

export default NavBar