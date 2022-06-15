import React from 'react'
import {Route, Routes } from 'react-router-dom'
import { CartMain } from '../pages/CartMain/CartMain'
import Home from '../pages/Home/Home'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<CartMain/>}/>
    </Routes>
  )
}

export default Routers