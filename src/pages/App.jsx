import React,{ useEffect, useState} from 'react'
import NavBar from '../assets/components/NavBar'
import Products from '../assets/components/Products'
import SideBar from '../assets/components/SideBar'
import useAppContext from '../assets/hook/useAppContext'

function App() {

  const { setCartCount } = useAppContext()

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
      <Products />
      <SideBar />
    </div>
  )
}

export default App