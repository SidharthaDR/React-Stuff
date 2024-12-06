import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  const [password, setPassword] = useState("");
  const [isNumAlwd, setIsNumAlwd] = useState(false);
  const [isCharAlwd, setIsCharAwld] = useState(false);
  const [length, setLength] = useState(8);

  //We used useState to capture and assign changes. useEffect to perform function when necessary and useCallback to improve performance in functions

  //reference value for selecting password-text field element to perform select operation
  const refVal = useRef(null) 
  
  //password generator function, used crypto.getRandomValues to generate cryptographically safe password
  const passwordGenerator = useCallback(() => {
    let randomBuff = new Uint32Array(1)
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstubwxyz"

    if(isNumAlwd) str+="0123456789";
    if(isCharAlwd) str+="~!@#$%^&*()_+=-`{}|?><,.;'[]";
    console.log(str)

    for(let i = 0; i < length; i++){
      pass += str[crypto.getRandomValues(randomBuff)%str.length]
    }
    setPassword(pass);
    console.log(pass)
 },[length, isCharAlwd, isNumAlwd, setPassword]);


 //fucntion for copying generated password when clicked on copy button
 const copyToClipBoard = useCallback(() => {
  refVal.current?.select()
  window.navigator.clipboard.writeText(password)
 },[password])


 //This useEffect hook fires passwordGenerator function when any of given dependencies change
 useEffect(() => {
  passwordGenerator();
 }, [isCharAlwd,isNumAlwd,passwordGenerator,length])
  

  return (
    <>
      <div className=''>

        <div>
            {/* App Name */}
            <h1 className='text-4xl'>Password Generator</h1>

            {/*This input feild shows generated password*/}
            <input 
            type="text"  
            readOnly
            placeholder='Password'
            size={91}
            value={password}
            ref={refVal}
             />

            {/*These below buttons are for copying, generating password again */}
             <button
             onClick={() => copyToClipBoard()}>Copy</button>
             <button
             onClick={() => passwordGenerator()}>Randomize</button>
        </div>


        <div>
           
           {/* This range acts as slider for setting length */}
          <input type="range" 
          id='rangeId'
          min={8}
          max={90}
          value={length}
          onChange={(e) => {
            setLength(e.target.value)
          }}  />
          <label htmlFor="rangeId">Length: {length}</label>


          {/*Checkboxes for allowing numbers, Special characters in password */}
          <input type="checkbox"  
          id="numBox"
          onClick={() => {
            setIsNumAlwd((prev) => (!prev))
          }}
           />
          <label htmlFor="numBox">Numbers</label>


          <input type="checkbox"  
          id="charBox"
          onClick={() => {
            setIsCharAwld((v) => (!v))
          }}
           />
          <label htmlFor="charBox">Characters</label>
        </div>


      </div>
    </>
  )
}

export default App
