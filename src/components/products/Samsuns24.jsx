import React from 'react'

function Samsuns24() {
  return (
    <div>
         <img  id="mac" src='https://m.media-amazon.com/images/I/71ez69tPl4L.jpg' alt='error' />
    <th id='row'>Specification</th>
    <tr>Model number :  SM-S921BZYCINS/1</tr>
    <tr>Model name: Samsung</tr>
    <tr>Series : s24</tr>
    <tr>Processor name : Exynos 2400 </tr>
    <tr>Camera : 50MP + 12MP + 10MP</tr>
    <tr>RAM : 8</tr>
    <tr>ROM :  256</tr>
    <tr>
    <button onClick={()=>window.location.href='/Home1'} >back</button>
    </tr>
    </div>
  )
}

export default Samsuns24
