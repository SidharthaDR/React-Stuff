import { useState } from 'react'

import './App.css'
import { InputBox } from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {

  const [amount,setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo) 

  const swap = () => {}

  

  return (
    <div
    className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/1420702/pexels-photo-1420702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
    }}>
      <div className='w-full bg-[#8852be8d]'>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30"
        >
          <InputBox
            >
          </InputBox>
       
          <button>swap</button>

        <InputBox>
        </InputBox>
        
        </div>

      </div>

    </div>
  )
}

export default App
