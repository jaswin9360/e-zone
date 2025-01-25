import React from 'react'

function Home() {
  return (
    <div>
       <div id='Header'>
        <h3 id='zoon'>e-zone</h3>   
      <p></p>
      <input type="search" placeholder='Search'></input>
      <a id='head' href='/'>Home</a><br/>
      <a id='about'href='/About'>About</a><br/>
      <a id='contact'href='/contact'>contact</a><br/>
      <a id="login" href='/login' >Log in</a>
      </div>
      <div id='MainHomeButton'>
        <button  id="HomeButton" onClick={()=>window.location.href="/Home1"}>Products</button>
        <button  id="HomeButton1" onClick={()=>window.location.href="/Accessories"}>Accessories</button>
      </div>
      <div id='MainFooter'>
      <footer>
   <p>@e-zoon 2025</p>
    </footer>
    <footer>
   <p>For more informatiom visit </p><br/>
   <a href='/about'>about</a><br/>
    </footer>
    <footer>
    <p>Any issues visit </p><br/>
    <a href='/contact'>contact</a><br/>
    </footer>
    </div>
    </div>
  )
}

export default Home
