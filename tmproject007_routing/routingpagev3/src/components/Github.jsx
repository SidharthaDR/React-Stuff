import React, { useEffect, useState } from 'react'


function Github() {

    const [data, setData] = useState({})
    const [name, setName] = useState("sidharthaDR")

    const my_token = "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"

    useEffect(() => {
        fetch('https://api.github.com/search/users?q='+`${name}`, {
            headers: {Authorization: `Bearer ${my_token}`}
          })
          .then((res) => (
            console.log("1st: ",res),
              res.json()
          )
            )
          .then((data) => (
            console.log("yoo",data),
            data.items
          ))
          .then((data) => setData(data[0]))
          .catch((e) => console.error("user not found... ", e))
            //sidharthads
    }, [name])
    /*
    Note: for fetching the data, you can use {} or () while using 
    .then(() => inThisPlace)

    the diffrence(s): 
    1. you dont use "return" while writing inside (), last statement will be returned
    2. you use " , " to give next statement inside ()
    */

//   const customFetch =(() =>  ( axios.get('https://api.github.com/search/users?q=sidharth', {
//     'headers': {
//       'Authorization': `token ${my_token}` 
//     }
//   })
//   )
// )

    // useEffect((name) => {
    //     fetch(`https://api.github.com/users/${name}`)
    //     .then((res) => res.json())
    //     .then(usrdata => {
    //         console.log(usrdata)
    //         setData(usrdata)
    //     })
    // },[name])

  return (
    <>
        <div className='flex flex-col gap-5'>
            
            <h1 className='text-center'>Github Page</h1>

            <div className='flex flex-col items-center gap-3'>

            <p>results: {data.total_count}</p>
            {console.log("other:", data, "????")}
            <p>Login: {data.login}</p>
            <img src={data.avatar_url} width={300} alt="" />

            </div>

            <div className='flex justify-center gap-3'>
            <input type="text" name="" id="nextName" placeholder='search other user'
            onKeyDown={(e) => {
                if(e.key === "Enter"){
                    setName(document.getElementById("nextName").value)
                }
            }
                
            }
            />
            <button onClick={() => {
                setName(document.getElementById("nextName").value)
            }}>Search</button>
            </div>

        </div>
    </>
  )
}

export default Github