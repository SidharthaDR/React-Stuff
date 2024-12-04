import { useState } from "react"

function App() {
const [color, setColor] = useState("grey");

  return (
    <>
     <div className = "w-full h-screen duration-200" style = {{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="bg-white gap-4 flex flex-wrap justify-center p-2 rounded-lg flex-row ">
          <button onClick={() => setColor("red")}
            className=" p-1 rounded-lg hover:h-0" style = {{backgroundColor:"red"}}>
              red</button>

              <button onClick={() => setColor("green")}
            className=" p-1 rounded-lg hover:h-0" style = {{backgroundColor:"green"}}>
              Green</button>

              <button onClick={() => setColor("blue")}
            className=" p-1 rounded-lg hover:h-0" style = {{backgroundColor:"blue"}}>
              Blue</button>

              <button onClick={() => setColor("yellow")}
            className=" p-1 rounded-lg hover:h-0" style = {{backgroundColor:"yellow"}}>
              Yellow</button>

              <button onClick={() => setColor("orange")}
            className=" p-1 rounded-lg hover:h-0" style = {{backgroundColor:"orange"}}>
              Orange</button>

              <button onClick={() => setColor("pink")}
            className=" p-1 rounded-lg hover:h-0" style = {{backgroundColor:"pink"}}>
              Pink</button>
          
        </div> 
      </div>

     </div>
    </>
  )
}

export default App
