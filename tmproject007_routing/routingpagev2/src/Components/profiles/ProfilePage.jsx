import React from 'react'
import { Outlet, useParams } from 'react-router'

function ProfilePage() {
    const params = useParams();
  return (
    
    <>
    <div>
        - profile {params.profileId} 
    </div>
    <Outlet/>

  
    </>
  )
}

export default ProfilePage