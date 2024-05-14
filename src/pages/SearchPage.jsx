import React,{ useEffect } from 'react'
import Products from '../assets/components/Products'
import useAppContext from '../assets/hook/useAppContext'
import NavBar from '../assets/components/NavBar'
import SideBar from '../assets/components/SideBar'

function SearchPage() {
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

export default SearchPage