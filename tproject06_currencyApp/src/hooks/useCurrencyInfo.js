import {useEffect, useState} from "react"

// For fall back use this https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.12.9/v1/currencies.json

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    //to call api
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((resp) => resp.json())
        .then((resp) =>  setData(resp[currency]))

        console.log(data)

    },[currency])
    console.log(data)

    return data;
}

export default useCurrencyInfo;