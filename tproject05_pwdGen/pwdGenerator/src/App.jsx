import { useCallback, useEffect, useRef, useState } from "react";
// import "./App.css";
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

/* copyPassword without useCallback
  const copyPasswordToClipboard = () => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password)
  }
*/

const copyPasswordToClipboard = useCallback(() => {
  window.navigator.clipboard.writeText(password);
},[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, character,passwordGenerator])

  // passwordGenerator();
// console.log("char: ", character," number: ", number)
  return (
    <>
      <div className="flex justify-center my-9">
        <div className="flex-col justify-center w-auto px-10 bg-slate-600 p-4 rounded-lg text-green-500">

          {/* row-1 */}
          <div className="">
            <h1 className="text-gray-100">Password Generator</h1>
            <input type="text" readOnly 
            placeholder="password"
            value={password}
            ref={passwordRef}/>
            <button onClick={
              () => copyPasswordToClipboard()
              }>Copy
            </button>
          </div>

          {/* row-2 */}
          <div className="flex ">
            
            <input type="range" max={99} min={8} value={length} 
            onChange={(e) => {setLength(e.target.value)}}/>

            <label>Length: {length} </label>

            
            <input type="checkbox"
            onClick={() => {
              setIsNumberAllowed((prev) => !prev)
            }}
             />
             <label>numbers</label> 
           </div>
           <div>
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
