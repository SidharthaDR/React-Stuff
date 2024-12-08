import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [isNumAlwd, setIsNumAlwd] = useState(false);
  const [isCharAlwd, setIsCharAwld] = useState(false);
  const [length, setLength] = useState(8);

  //We used useState to capture and assign changes. useEffect to perform function when necessary and useCallback to improve performance in functions

  //reference value for selecting password-text field element to perform select operation
  const refVal = useRef(null);

  //password generator function, used crypto.getRandomValues to generate cryptographically safe password
  const passwordGenerator = useCallback(() => {
    let randomBuff = new Uint32Array(1);
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstubwxyz";

    if (isNumAlwd) str += "0123456789";
    if (isCharAlwd) str += "~!@#$%^&*()_+=-`{}|?><,.;'[]";
    console.log(str);

    for (let i = 0; i < length; i++) {
      pass += str[crypto.getRandomValues(randomBuff) % str.length];
    }
    setPassword(pass);
    console.log(pass);
  }, [length, isCharAlwd, isNumAlwd, setPassword]);

  //fucntion for copying generated password when clicked on copy button
  const copyToClipBoard = useCallback(() => {
    refVal.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //This useEffect hook fires passwordGenerator function when any of given dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [isCharAlwd, isNumAlwd, passwordGenerator, length]);

  return (
    <>
      <div className="p-10 place-content-center mt-32">
      <div className="flex-row
      bg-gradient-to-r from-green-500 to-green-600
      rounded-lg p-10 shadow-lg">
        {/* App Name */}
        <h1 className="text-4xl text-cyan-50 mt-5">Password Generator</h1>

        <div className="pb-5 mt-10">
          {/*This input feild shows generated password*/}
          <input

            type="text"
            readOnly
            placeholder="Password"
            size={91}
            value={password}
            ref={refVal}
            className="px-4 mx-5"

          />

          {/*These below buttons are for copying, generating password again */}
          <button

            className="mx-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" 

            onClick={() => copyToClipBoard()}>
              
            Copy

          </button>


          <button 

            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-100"

            onClick={() => passwordGenerator()}>

            Randomize

          </button>

        </div>

        <div className=" flex justify-center gap-5 p-5 rounded-xl
        py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white  border border-gray-200 ">
          {/* This range acts as slider for setting length */}
          <input
            className=""
            type="range"
            id="rangeId"
            min={8}
            max={90}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label 
          className=""
          >Length:</label>
          <label 
          className="w-5"
          >{length}</label>

          {/*Checkboxes for allowing numbers, Special characters in password */}
          <input
            className=""
            type="checkbox"
            id="numBox"
            onClick={() => {
              setIsNumAlwd((prev) => !prev);
            }}
          />
          <label htmlFor="numBox">Numbers</label>

          <input
            className=""
            type="checkbox"
            id="charBox"
            onClick={() => {
              setIsCharAwld((v) => !v);
            }}
          />
          <label htmlFor="charBox">Characters</label>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
