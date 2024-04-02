import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import CalculateMotor from './pages/CalculateMotor'
import Home from './pages/Home'
import Login from './pages/Login'
import MyMotors from './pages/MyMotors'


import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route index element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
