import React from 'react'

function Card({xy = "Someplace",name = "user", profilePic="https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg", msg = "Message"}) {

  console.log("props: "+ name+ "place:" + xy )
  return (
    <>
         <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={profilePic} alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:t space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        {msg}
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {name}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, {xy}
      </div>
    </figcaption>
  </div>
</figure>
    </>
  )
}

export default Card