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

  const swap = () => {
    setTo(from)
    setFrom(to)
  }

 const convert = () => {
  setConvertedAmount (amount * currencyInfo[to])
 }
  

  return (
    <div
    className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/1420702/pexels-photo-1420702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
    }}>
      <div className='w-full bg-kingGreen p-5'>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30"
        >

          <form 
            onSubmit={
              (e) => {e.preventDefault();
              convert()
              }
            }
              >

         
              <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              selectedCurrency={from}
              onAmountChange={
                (amt) => (setAmount(amt))
              }
              onCurrencyChange={
                (cur) => (
                  setFrom(cur)
                )
              }
                >
              </InputBox>
          
              <button
              onClick = {swap}
              >swap</button>

            <InputBox
            label="To"
            amount= {convertedAmount}
            amountDisabled
            onCurrencyChange={
              (cur) => setTo(cur)
            }
            selectedCurrency={to}
            currencyOptions={options}
            
            >
            </InputBox>

            <button type='submit' className="sub-button">
              convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
        
        </form>

        </div>

      </div>

    </div>
  )
}

export default App
