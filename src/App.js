import React from 'react'

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Details from './components/products/Applelaptop'
import Buy from './components/Buy'
import Home1 from './components/Home1'
import Accessories from './components/Accessories'
import Login from './components/Login'
import Create from './components/Create'
import Oneplusmobile from './components/products/Oneplusmobile'
import Apple13 from './components/products/Apple13'
import Asus from './components/products/Asus'
import Samsuns24 from './components/products/Samsuns24'
const App = ()=> {
  
  return (
    <div>
        <BrowserRouter>
        < Routes>  
            <Route path='/Apple macbook air m1' element={<Details/>}></Route>
            <Route path='/Oneplus 12' element={<Oneplusmobile/>}></Route>
            <Route path='/Iphone 13' element={<Apple13/>}></Route>
            <Route path="/Samsung s24" element={<Samsuns24/>}></Route>
            <Route path="/Asus tuf f17" element={<Asus/>}></Route>
            <Route path='/Home1' element={<Home1/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/Create' element={<Create/>}></Route>
            <Route path='/Accessories' element={<Accessories/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Buy' element={<Buy/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App
