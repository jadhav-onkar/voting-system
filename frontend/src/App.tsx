import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { VoteMonitor } from './pages/votemoniter'
import { Home } from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/voting' element={<VoteMonitor/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
