import { useCallback, useState } from 'react'
import './App.css'
/*
Notes:
1. used "useCallback" for optimization -> It is a React Hook that lets you cache a function definition between re-renders.
*/


function App() {
  
  const [length, setLength] = useState(8)
  const [number, numberAllowed] = useState(false)
  const [character, charAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(number){
      str+="123456789"
    }
    if(character){
      str+="!@#$%^&*()_+.,;'[]"
    }

    for(let i = 0; i<length; i++){
      pass +=  str.charAt(Math.floor((Math.random() * str.length)))
    }
    console.log("hello ",pass)
  }, [length, number, character, setPassword])

  passwordGenerator()

  return (
    <>
      <h1 className="text-4xl text-center text-slate-200">Password Generator</h1>

      <input type="text" id="" readOnly />

      <input type="range" name="" id="" 
      max={100}
      min={8}
      value={8}
      />
    </>
  )
}

export default App
