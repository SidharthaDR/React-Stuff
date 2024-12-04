import React from 'react'

function ButtonComp({bbcolor,funck}) {

  return (
    <div>
        <button onClick={funck} className="p-1 px-2 rounded-lg hover:h-0" style={{backgroundColor:bbcolor}}> {bbcolor}</button>
    </div>
  )
}

export default ButtonComp