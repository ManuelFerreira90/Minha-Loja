import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetail from './assets/components/ProductDetail'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/Minha-Loja' element={<App/>}></Route>
      <Route path='/Minha-Loja/productDetail/:id' element={<ProductDetail/>}></Route>
    </Routes>
  </BrowserRouter>,
)
