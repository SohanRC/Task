import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Home.jsx'
import Company from './Components/Company.jsx'
import InteriorDesign from './Components/InteriorDesign.jsx'
import Craftsmen from './Components/Craftsmen.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/company' element={<Company />} />
      <Route path='/interior-design' element={<InteriorDesign />} />
      <Route path='/craftsmen' element={<Craftsmen />} />
    </Routes>
  </BrowserRouter>
)
