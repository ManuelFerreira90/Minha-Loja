import React,{ useEffect, useState} from 'react'
import Header from './assets/components/Header'
import NavBar from './assets/components/NavBar'
import Products from './assets/components/Products'
import SideBar from './assets/components/SideBar'

function App() {

  const [navegation, setNavegation] = useState('jewelery')
  const [produtctPage, setProductPage] = useState({})
  const initialCartCount = parseInt(localStorage.getItem('cartCount')) || 0
  const [cartCount, setCartCount] = useState(initialCartCount)
  const [clickCart, setClickCart] = useState(false)

  const handleCart = (id) => {
    const keys = Object.keys(localStorage)

    let cart = false
    let auxLocalStorage

    keys.forEach((key)=>{
      auxLocalStorage = JSON.parse(localStorage.getItem(key))
      if(auxLocalStorage.id === id){
        cart = true
        auxLocalStorage.amount = auxLocalStorage.amount + 1
        localStorage.setItem(key, JSON.stringify(auxLocalStorage))
      }
    })

    if(cart == false){
      const objCart = {
        id:id,
        amount:1
      }
      localStorage.setItem('id'+cartCount, JSON.stringify(objCart))

      const aux = cartCount + 1
      setCartCount(aux)
      localStorage.setItem('cartCount', aux)
    }
  }

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
    <div className='app_container'>
      <Header cartCount={cartCount} setClickCart={setClickCart} clickCart={clickCart} />
      <NavBar navegation={navegation} setNavegation={setNavegation} clickCart={clickCart} />
      <Products navegation={navegation} handleCart={handleCart} clickCart={clickCart} />
      <SideBar setClickCart={setClickCart} clickCart={clickCart} />
    </div>
  )
}

export default App