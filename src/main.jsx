import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import App from './pages/App.jsx'
import AppProvider from './assets/context/AppProvider'
import './index.css'
import Header from './assets/components/Header'
import SearchPage from './pages/SearchPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <Header />
      <Routes>
        <Route path='/Minha-Loja/' element={<App/>}></Route>
        <Route path='/Minha-Loja/productDetail/:id' element={<ProductDetail/>}></Route>
        <Route path='/Minha-Loja/search/:searchproduct' element={<SearchPage/>}></Route>
      </Routes>
    </AppProvider>
  </BrowserRouter>,
)