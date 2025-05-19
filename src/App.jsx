import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './components/pages/Homepage'
import About from './components/pages/About'
import Posts from './components/pages/Posts'
import { AlertProvider } from './components/contexts/Alertcontext'

function App() {


  return (
    <AlertProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  )
}

export default App
