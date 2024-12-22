import React, {useState, useContext} from 'react'
import UserContext from '../contexts/UserContext'

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)


  const handleSubmit = (e) => {
      e.preventDefault()
      setUser({userName,password})
  }
  return (
    <div>

      <h1>Login</h1>

      <input type="text" 
      value={userName}
      onChange={(e) => setUserName(e.target.value) }
      placeholder='username' />

      <input type="text"
      value={password}
      onChange={(e) => setPassword(e.target.value) }
      placeholder='password'/>

      <button onClick = {handleSubmit}>Submit</button>
      
    </div>
  )
}

export default Login