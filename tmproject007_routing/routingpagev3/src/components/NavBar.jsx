import {NavLink} from 'react-router'
function NavBar() {
  return (
    <div className="flex justify-center p-4 shadow-xl m-2">
      <ul className="flex gap-3">
        <NavLink to = "/"
        className= {
          ({isActive}) => ` ${isActive? "text-red-500":""} `
        }
        ><li>Home</li></NavLink>

        <NavLink to = "about"
         className= {
          ({isActive}) => ` ${isActive? "text-red-500":""} `
        }
        ><li>About</li></NavLink>
        
        <NavLink to = "projects"
         className= {
          ({isActive}) => ` ${isActive? "text-red-500":""} `
        }
        ><li>Projects</li></NavLink>


      
      </ul>
      
    </div>

  )
}

export default NavBar