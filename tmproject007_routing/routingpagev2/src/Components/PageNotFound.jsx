import React from 'react'
import { useNavigate } from 'react-router'

function PageNotFound() {
    const navigation = useNavigate();
  return (
    <>
    <div className='bg-gray-500 shadow-xl p-5 rounded-lg'>
        <div className='flex-col justify-center'>
            <h1 className='text-[4rem] p-10 my-10 text-white'>Error 404: Page not Found </h1>
            <button 
            onClick={() => navigation("/")}
            className='bg-black text-white p-3 rounded-lg hover:bg-white hover:text-black hover:shadow-lg ease-out transition-all'
            >Go Home</button>
        </div>
    </div>
    </>
  )
}

export default PageNotFound