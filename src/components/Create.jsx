import React from 'react'
import "./Login/signup.css"
function Create() {
   
  return (
    <div>
        <form id='form' >
          <h1>Create  New   Account </h1>
      <label>Name:</label>
      <input type='text ' placeholder='Enter your name'/>
      <label>Phone No:</label>
      <input type="number" placeholder='Enter your number'/>
      <label>Email:</label>
      <input type='email' placeholder='Enter your email'/>
      <label>Password:</label>
      <input type='password' placeholder='Enter your password'/>
      <button >Submit</button>
      <a href='/login'>login</a> 
      </form>       
      <button onClick={()=>window.location.href='/'} >back</button>
    </div>
  )
}

export default Create