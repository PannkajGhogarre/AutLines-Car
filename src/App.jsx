import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Inventory from './components/Inventory/Inventory';
import Page from './components/Pages/Page'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Grid from './components/Inventory/Grid'
import List from './components/Inventory/List'
import Details from './components/Inventory/Details'
import Booking from './components/Inventory/Booking'
import Shop from './components/Pages/Shop'
import Product from './components/Pages/Product'
import Cart from './components/Pages/Cart'


const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='/inventory-grid' element={<Grid/>}/>
        <Route path='/inventory-list' element={<List/>}/>
        <Route path='/vehicle-details' element={<Details/>}/>
        <Route path='/booking-auto' element={<Booking/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='news' element={<News/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App