import React from 'react'
import "./Login/signup.css"
function Login() {
  return (
    <div>
       
        <form id='form1'>
          <h1>Login with your Account </h1>
    
      <label>Email:</label>
      <input  id="Loginform1" type='email' placeholder='Enter your email'/>
      <label>Password:</label>
      <input  id="Loginform1" type='password' placeholder='Enter your password'/>
      <button  id="Loginbutton">Summit</button>
      <a href='/create'>Create account</a> <button onClick={()=>window.location.href='/Home1'} >back</button>
      </form> 
    </div>
  )
}

export default Login