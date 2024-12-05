import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
/*
Notes:
1. used "useCallback" for optimization -> It is a React Hook that lets you cache a function definition between re-renders.

2. used "useEffect" updating when any change is done
*/

function App() {
  const [length, setLength] = useState(8);
  const [number, setIsNumberAllowed] = useState(false);
  const [character, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (number) str += "123456789";
    if (character) str += "!@#$%^&*()_+.,;'[]";
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    console.log("hello ", pass);
    setPassword(pass)
  }, [length, number, character, setPassword]);

/* copyPasswordToClipboard function without useCallback
  const copyPasswordToClipboard = () => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password)
  }
*/

const copyPasswordToClipboard = useCallback(() => {
  
  passwordRef.current?.select()
  
  // === to show selection from x:0 to y:14 ===
  // passwordRef.current?.setSelectionRange(0,14)
  // window.navigator.clipboard.writeText(password.substring(0,14))
  // === done ===

  window.navigator.clipboard.writeText(password);
},[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, character,passwordGenerator])

  // passwordGenerator();
// console.log("char: ", character," number: ", number)
  return (
    <>
      {/* <div className="flex justify-center my-9 overflow-hidden"> */}
      <div className="container">
        {/* <div className="flex-col justify-center w-auto px-10 bg-slate-600 p-4 rounded-lg text-green-500"> */}
        <div className="passwordGenContainer">

          {/* row-1 */}
          {/* <div className=""> */}
          <div className="row1">
            {/* <h1 className="text-gray-100">Password Generator</h1> */}
            <h1 className="text-gray-100">Password Generator</h1>
            <div>
            <input type="text" readOnly 
            placeholder="password"
            value={password}
            ref={passwordRef}/>

            <button onClick={
              () => copyPasswordToClipboard()
              }>Copy
            </button>
            </div>
           
          </div>

          {/* row-2 */}
          {/* <div className="flex "> */}
          <div className="row2">
            
            <input type="range" max={99} min={8} value={length} 
            onChange={(e) => {setLength(e.target.value)}}/>

            <label>Length:{length}</label><br /><br />

            
            <input type="checkbox"
            onClick={() => {
              setIsNumberAllowed((prev) => !prev)
            }}
             />
             <label>numbers</label> 
          
           
           {/* checkbox for char */}

            <input type="checkbox" name="" id=""
            onClick={() => {
              setIsCharAllowed((prev) => !prev)
            }}  />
             <label>characters</label>

             </div>

        </div>
      </div>
    </>
  );
}

export default App;
