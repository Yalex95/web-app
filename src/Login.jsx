import React, { useState } from 'react'

export const Login = ({setIsValid}) => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsValid(true)
    
    }
  return (
    <>
    <div className="container justify-content-center">
        
    <div className='form'>
        <h3>Welcome</h3>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='User' value={user}  onChange={e=>setUser(e.target.value)}/>
        <input type="email" placeholder='Email' name="email" id="" value={email}  onChange={e=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" name="password" id="" value={password}  onChange={e=>setPassword(e.target.value)}/>
        <button type="submit">
            Login
        </button>
    </form>
    </div>
    </div>
    </>
  )
}
