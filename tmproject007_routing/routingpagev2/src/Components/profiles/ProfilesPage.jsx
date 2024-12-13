import React from 'react'
import { NavLink, Outlet } from 'react-router'

function ProfilesPage() {
    const profiles = [1,2,3,4,5]
  return (
    <>
    <div className='flex gap-5'>

    <div className='flex flex-col gap-3 justify-center'>
            {
                profiles.map(
                    (p) => (
                        <NavLink key = {p} to = {`/profiles/${p}`}
                        className=
                        {
                          ({isActive}) => (
                            isActive ? "text-red-500" : ""
                          )
                          
                        } >
                            profile {p}
                        </NavLink>
                    ))
            }
            
    </div>
    
    <Outlet/>
    </div>


    
    </>
  )
}

export default ProfilesPage