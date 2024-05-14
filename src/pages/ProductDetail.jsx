import React, { useEffect } from 'react'
import NavBar from '../assets/components/NavBar'
import './css/ProductDetail.css'
import SideBar from '../assets/components/SideBar'
import ProductDetailPage from '../assets/components/ProductDetailPage'

function ProductDetail() {

  const handleStorageChange = () => {
    setCartCount(0)
  }

  useEffect(() => {
    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])


  return (
    <div>
      <NavBar />
      <ProductDetailPage />
      <SideBar />
    </div>
  )
}

export default ProductDetail