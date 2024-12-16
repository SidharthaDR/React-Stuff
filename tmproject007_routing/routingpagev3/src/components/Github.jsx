import React, { useEffect, useState } from 'react'


function Github() {

    const [data, setData] = useState({})
    const [name, setName] = useState("sidharthaDR")

    const my_token = "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"

    useEffect(() => {
        fetch('https://api.github.com/users/'+`${name}`, {
            headers: {Authorization: `coolUser ${my_token}`}
          })
          .then((res) => (
            console.log("1st: ",res),
              res.json()
          )
            )
          .then((data) => (
            console.log("yoo",data),
            setData(data)
          ))
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
            <p>Followers: {data.followers}</p>
            <p>Following: {data.following}</p>
            <img src={data.avatar_url} width={300} alt="" 
            className='rounded-[50%]'/>

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