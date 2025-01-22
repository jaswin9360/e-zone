import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Details from './components/Details'
import Buy from './components/Buy'
import Home1 from './components/Home1'
import Accessories from './components/Accessories'

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>  
        <Route path='/Apple macbook air m1' element={<Details/>}></Route>
        <Route path='/Home1' element={<Home1/>}></Route>
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
