import React, { useState } from 'react'
import axios from 'axios'
import "./Login/signup.css"

 const Create = ()=> {
const [name ,setname]=useState("")
const [email,setemail]=useState("")
const [password,setpassword]=useState("")
 const handlechange = async(e)=>{
e.preventDefault();
  console.log(name,email,password)
  const data={
    name,
    email,password
     }
 const  data1 = await axios.post("http://localhost:4000/register",data)
 console.log(data1)}
  return (
    <div>
        <form id='form1' >
          <h1>Create  New   Account </h1>
      <label>Name:</label>
      <input  id="Loginform1" type='text ' placeholder='Enter your name' onChange={(e)=>setname(e.target.value)}/>
      {/* <label>Phone No:</label>
      <input  id="Loginform1" type="number" placeholder='Enter your number'/> */}
      <label>Email:</label>
      <input  id="Loginform2" type='email' placeholder='Enter your email' onChange={(e)=>setemail(e.target.value)}/>
      <label>Password:</label>
      <input id="Loginform3" type='password' placeholder='Enter your password'onChange={(e)=>setpassword(e.target.value)}/>
      <button  id='Loginbutton' onClick={(e)=>handlechange(e)}>Submit</button>
      <a href='/login'>login</a>   <button id='buttonback' onClick={()=>window.location.href='/'} >back</button>  
      </form>    
    </div>
  )
}

export default Create