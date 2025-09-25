
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { VoteMonitor } from './pages/votemoniter'
import { Home } from './pages/home'
import { Vote } from './pages/vote'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/voting' element={<VoteMonitor/>}></Route>
          <Route path='/vote' element={<Vote/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
