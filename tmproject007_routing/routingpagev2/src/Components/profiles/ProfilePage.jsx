import React from 'react'
import { useParams } from 'react-router'

function ProfilePage() {
    const params = useParams();
  return (
    
    <>
    <div>
        - profile {params.profileId} 
    </div>

  
    </>
  )
}

export default ProfilePage