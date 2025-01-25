import React from 'react'

function Contact() {
  return (
    <div id="contact1">
     <th>e-zone</th>
     <p>contact : SMS "55571659"</p>
     <p>email :someone@gmail.com </p>
      <a href='/'>Home</a>         <button onClick={()=>window.location.href='/Home1'} >back</button>
    </div>
  )
}

export default Contact
