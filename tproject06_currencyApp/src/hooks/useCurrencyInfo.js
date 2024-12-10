import {useEffect, useState} from "react"

// For fall back use this https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.12.9/v1/currencies.json

// Custom func
async function safeFetch(purl, surl){
    try{
        const resp = await fetch(purl);
        if(!resp.ok) throw new Error (`Fetching from Primary URL ${purl} failed.....`)

        return await resp.json()
    }
    catch(e){
        console.error("Primary URL failed: ",e)

        try{
            const resp = await fetch(surl)
            if(!resp.ok) throw new Error (`Fetching from Secondary URL ${surl} failed too.....`)

            console.warn("Working with secondary URL...")
            return await resp.json()
        }
        catch(e){
            console.error("Secondary URL failed: ",e)
        }
    }
}
// Custom func

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    //to call api
    useEffect(() => {

        //Previous and these working well:
        // fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        // .then((resp) => resp.json())
        // .then((resp) =>  setData(resp[currency]))

        //new using safe fetch:
        const purl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.jsond`
        const surl = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`

        safeFetch(purl,surl).then((res) => setData(res[currency]))

        console.log(data)

    },[currency])
    console.log(data)

    return data;
}

export default useCurrencyInfo;