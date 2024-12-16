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

       <NavLink to="github"
        className={
          ({isActive}) => `${isActive? "text-red-500": ""}` 
        }
        ><li>GitHub</li></NavLink>

        <NavLink
        to="githubv2"
        className={
          ({isActive}) => `${isActive? "text-red-500":""} hover:text-green-500` 
        }><li>GitHub V2</li></NavLink>

        {/* Notes for NavLink :
        1. we used {} for ({isActive}). If didn't used, its acts like normal any arg or param
        2. I used `` quotes because, we might add more CSS classes. If no classes
        were need to added, then simple 
        
        ({isActive}) => isActive? "text-red-500":""

        Although this is bad way to do. Always `` if possible while dealing with
        functions in className.
        
        ({isActive}) => `${isActive? "text-red-500": ""}` 
        is Good way.
        */}

      
      </ul>
      
    </div>

  )
}

export default NavBar