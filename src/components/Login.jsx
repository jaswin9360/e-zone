import React,{useState} from 'react'
import axios from 'axios'
import "./Login/signup.css"

function Login() {
  
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
     const handlechange = async(e)=>{
    e.preventDefault();
      console.log(email,password)
      const data={
        email,
        password
         }
    try {
      const data1 =  await axios.post("http://localhost:4000/login",data)
      console.log(data1)
    } catch (error) {
      console.log("login error")
    }
  }
  return (
    <div>
       
        <form id='form1'>
          <h1>Login with your Account </h1>
    
      <label>Email:</label>
      <input  id="Loginform4" type='email' placeholder='Enter your email' onChange={(e)=>setemail(e.target.value)}/>
      <label>Password:</label>
      <input  id="Loginform5" type='password' placeholder='Enter your password'onChange={(e)=>setpassword(e.target.value)}/>
      <button  id="Loginbutton" onClick={(e)=>handlechange(e)}>Summit</button>
      <a href='/create'>Create account</a> <button onClick={()=>window.location.href='/Home1'} >back</button>
      </form> 
    </div>
  )
}

export default Login