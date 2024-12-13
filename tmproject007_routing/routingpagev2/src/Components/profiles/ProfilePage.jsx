import React from 'react'
import { useParams } from 'react-router'

function ProfilePage() {
    const params = useParams();
    console.log(params)
  return (
    <>
    <div>Profile Page</div>
    <div>
        profile {params.profileId}
    </div>
    </>
  )
}

export default ProfilePage