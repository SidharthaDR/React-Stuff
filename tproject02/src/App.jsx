import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [count, counterF] = useState(0) 


  const addCount = () => {
    if(count>=19) counterF(count = 20);
    else counterF(count = count+1)
    console.log(count)
  }

  const subCount = () => {
    if(count<=0) counterF(count = 0);
    else counterF(count = count-1)
    console.log(count)
  }

  return (
    <>
     <h1>Simple Counter 🔢</h1>
     <h2>{count}</h2>
     <button onClick={addCount}>Add</button>
     <br />
     <button onClick={subCount}>Subtract</button>
    </>
  )
}

export default App
