import { useState } from "react"
import ButtonComp from "../components/ButtonComp";

function App() {
const [color, setColor] = useState("grey");

  return (
    <>
     <div className = "w-full h-screen duration-200" style = {{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="bg-white gap-4 flex flex-wrap justify-center p-2 rounded-lg flex-row ">
          <ButtonComp bbcolor="red" funck={() =>{setColor("red")}} ></ButtonComp>

          <ButtonComp bbcolor="green" funck={() =>{setColor("green")}} ></ButtonComp>

          <ButtonComp bbcolor="blue" funck={() =>{setColor("blue")}} ></ButtonComp>

          <ButtonComp bbcolor="yellow" funck={() =>{setColor("yellow")}} ></ButtonComp>

          <ButtonComp bbcolor="orange" funck={() =>{setColor("orange")}} ></ButtonComp>

          <ButtonComp bbcolor="pink" funck={() =>{setColor("pink")}} ></ButtonComp>

        </div> 
      </div>

     </div>
    </>
  )
}

export default App
