import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className=''>

        <div>
            <h1 className='text-4xl'>Password Generator</h1>

            <input 
            type="text"  
            readOnly
            placeholder='Password'
             />

             <button>Copy</button>
             <button>Randomize</button>
        </div>


        <div>
          <input type="range" 
          id='rangeId'
          min={8}
          max={50}
          value={length}  />
          <label htmlFor="rangeId">Length: {length}</label>

          <input type="checkbox"  
          id="numBox"
           />
          <label htmlFor="numBox">Numbers</label>

          <input type="checkbox"  
          id="charBox"
           />
          <label htmlFor="charBox">Characters</label>

        </div>


      </div>
    </>
  )
}

export default App
