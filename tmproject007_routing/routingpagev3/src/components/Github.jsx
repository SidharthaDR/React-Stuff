import React, { useEffect, useState } from 'react'


function Github() {

    const [data, setData] = useState({})
    const [name, setName] = useState("sidharthaDR")

    const my_token = "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"

    useEffect(() => {
        fetch('https://api.github.com/search/users?q='+`${name}`, {
            headers: {Authorization: `Bearer ${my_token}`}
          })
          .then((res) => res.json())
          .then((data) => (
            console.log("yoo",data),
            data.items
          ))
          .then((data) => setData(data[0]))
            
    }, [name])
    /*
    Note: for fetching the data, you can use {} or () while using 
    .then(() => inThisPlace)

    the diffrence(s): 
    1. you dont use "return" whle writing inside ()
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
        <div>
            <h1 className='text-center'>Github Page</h1>
            <p>results: {data.total_count}</p>
            {console.log("other:", data, "????")}
            <p>Login: {data.login}</p>
            <img src={data.avatar_url} width={300} alt="" />


            <input type="text" name="" id="nextName" placeholder='search other user'/>
            <button onClick={() => {
                setName(document.getElementById("nextName").value)
            }}>Search</button>
        </div>
    </>
  )
}

export default Github