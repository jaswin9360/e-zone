import React from 'react'
import "./Login/signup.css"
function Create() {
   
  return (
    <div>
        <form id='form1' >
          <h1>Create  New   Account </h1>
      <label>Name:</label>
      <input  id="Loginform1" type='text ' placeholder='Enter your name'/>
      <label>Phone No:</label>
      <input  id="Loginform1" type="number" placeholder='Enter your number'/>
      <label>Email:</label>
      <input  id="Loginform1" type='email' placeholder='Enter your email'/>
      <label>Password:</label>
      <input id="Loginform1" type='password' placeholder='Enter your password'/>
      <button  id='Loginbutton'>Submit</button>
      <a href='/login'>login</a>   <button id='buttonback' onClick={()=>window.location.href='/'} >back</button>  
      </form>    
    </div>
  )
}

export default Create