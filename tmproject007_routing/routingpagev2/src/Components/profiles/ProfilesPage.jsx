import React from 'react'
import { Link } from 'react-router'

function ProfilesPage() {
    const profiles = [1,2,3,4,5]
  return (
    <>
    <div className='flex flex-col gap-3 justify-center'>
            {
                profiles.map(
                    (p) => (
                        <Link key = {p} to = {`/profiles/${p}`}>
                            profile {p}
                        </Link>
                    ))
            }
    </div>
    </>
  )
}

export default ProfilesPage