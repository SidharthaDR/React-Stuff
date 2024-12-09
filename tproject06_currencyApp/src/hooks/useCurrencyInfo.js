import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    //to call api
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}`)
        .then((resp) => resp.json())
        .then((res) =>  )
    },[])
}