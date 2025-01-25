import React from 'react'

function Apple13() {
  return (
    <div>
       <img  id="mac" src='https://inventstore.in/wp-content/uploads/2023/04/iPhone_13_RED.webp' alt='error' />
    <th id='row'>Specification</th>
    <tr>Model number :  MLQ93HN/A</tr>
    <tr>Model name: Iphone</tr>
    <tr>Series : 13</tr>
    <tr>Processor name : A15 Bionic chip</tr>
    <tr>Camera : 12MP + 12MP</tr>
    <tr>RAM : N/A</tr>
    <tr>ROM :  128</tr>
    <tr>
    <button onClick={()=>window.location.href='/Home1'} >back</button>
    </tr>
   
    </div>
  )
}

export default Apple13
