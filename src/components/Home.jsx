
import './Main.css'
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
      </div>
    <section>
    <img  id="laptop" src='https://m.media-amazon.com/images/I/71jG+e7roXL.jpg' alt='error' />
    <div id="apple">
        <a className='apple1' href='/Apple macbook air m1'>Apple macbook air m1</a> <br/>
        <h1 className='apple2'> Price : 73,999 </h1> <br/>
        <h2 className='apple3'>In stock</h2> <br/>
        </div>
        <button id='botton' onClick={() => {window.location.href = "/Buy"}}>Buy</button>
    </section>
    <section>
    <img  id="mobile" src='https://media.croma.com/image/upload/v1718024762/Croma%20Assets/Communication/Mobiles/Images/306961_0_jbha1h.png' alt='error' />
    <div id="oneplus">
        <a className='oneplus1' href='/Oneplus 12'>One plus 12</a> <br/>
        <h1 className='oneplus2'> Price : 69,999 </h1> <br/>
        <h2 className='oneplus3'>In stock</h2> <br/>
        </div>
        <button id='botton1' onClick={() => {window.location.href = "/Buy"}}>Buy</button>
    </section>
    <section>
    <img  id="mobile" src='https://inventstore.in/wp-content/uploads/2023/04/iPhone_13_RED.webp' alt='error' />
    <div id="oneplus">
        <a className='oneplus1' href='/Iphone 13'>Iphone 13</a> <br/>
        <h1 className='oneplus2'> Price : 55,999 </h1> <br/>
        <h2 className='oneplus3'>In stock</h2> <br/>
        </div>
        <button id='botton1' onClick={ () => {window.location.href = "/Buy"}}>Buy</button>
    </section>
    <section>
    <img  id="mobile" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LkEgN0159FQ--0GBuwcBOKhfVtT3aMQQMA&s' alt='error' />
    <div id="oneplus">
        <a className='oneplus1' href='/Asus tuf f17'>Asus tuf f17</a> <br/>
        <h1 className='oneplus2'> Price : 66,999</h1> <br/>
        <h2 className='oneplus3'>In stock</h2> <br/>
        </div>
        <button id='botton1' onClick={ () => {window.location.href = "/Buy"}}>Buy</button>
    </section>
    <section>
    <img  id="mobile" src='https://m.media-amazon.com/images/I/71ez69tPl4L.jpg' alt='error' />
    <div id="oneplus">
        <a className='oneplus1' href='/Samsung s24 '>Samsung s24 </a> <br/>
        <h1 className='oneplus2'> Price : 74,999 </h1> <br/>
        <h2 className='oneplus32'>Out of stock</h2> <br/>
        </div>
        <button id='botton1' onClick={() => {window.location.href = "/Buy"}}>Buy</button>
    </section>
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
  )
}

export default Home
