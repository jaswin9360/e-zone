import React from 'react'


function About() {
  return (
    <div id='about1'>
      <th >e-zone</th>
      <p id='main'>e-zone is inspired from amazon and also flipkart</p>
      <p id='main'>Local patform</p>
      <p id='main'>our plans to achive 1 million user in e-zone</p>
      <a href='/'>Home</a>  <button onClick={()=>window.location.href='/Home1'} >back</button>
    
    </div>
  )
}

export default About
