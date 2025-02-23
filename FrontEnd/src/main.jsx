import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Home.jsx'
import Company from './Components/Company.jsx'
import InteriorDesign from './Components/InteriorDesign.jsx'
import Craftsmen from './Components/Craftsmen.jsx'
import EditCompany from './Components/EditCompany.jsx'
import EditInteriorDesigner from './Components/EditInteriorDesigner.jsx'
import EditCraftsmen from './Components/EditCraftsmen.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/company' element={<Company />} />
      <Route path='/edit/company/:id' element={<EditCompany />} />
      <Route path='/interior-design' element={<InteriorDesign />} />
      <Route path='/edit/interior-design/:id' element={<EditInteriorDesigner />} />
      <Route path='/craftsmen' element={<Craftsmen />} />
      <Route path='/edit/craftsmen/:id' element={<EditCraftsmen />} />
    </Routes>
  </BrowserRouter>
)
