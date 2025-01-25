import React from 'react'

function Asus () {
  return (
    <div>
         <img  id="mac" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LkEgN0159FQ--0GBuwcBOKhfVtT3aMQQMA&s' alt='error' />
    <th id='row'>Specification</th>
    <tr>Model number : FX706HC-HX070T</tr>
    <tr>Model name: Asus Tuf Gaming</tr>
    <tr>Series : f17</tr>
    <tr>Processor name : Intel core i5 11 Gen </tr>
    <tr>Camera : 48MP </tr>
    <tr>RAM : 16</tr>
    <tr>ROM :  512</tr>
    <tr>
    <button onClick={()=>window.location.href='/Home1'} >back</button>
    </tr>
    </div>
  )
}

export default Asus 
