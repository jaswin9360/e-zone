import React from 'react'
import "./Login/signup.css"
function Login() {
  return (
    <div>
       <div>
        <form id='form'>
          <h1>Login with your    Account </h1>
    
      <label>Email:</label>
      <input  id="login" type='email' placeholder='Enter your email'/>
      <label>Password:</label>
      <input  id="login" type='password' placeholder='Enter your password'/>
      <button  id="submmit">Summit</button>
      <a href='/create'>Create account</a> <button onClick={()=>window.location.href='/Home1'} >back</button>
      </form> 
      
      
    </div>
  
    </div>
  )
}

export default Login