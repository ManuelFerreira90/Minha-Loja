import React,{ useEffect, useState} from 'react'
import Header from './assets/components/Header'
import NavBar from './assets/components/NavBar'
import Products from './assets/components/Products'
import SideBar from './assets/components/SideBar'
import NavBarProduct from './assets/components/NavBarProduct'

function App() {

  const [navegation, setNavegation] = useState('jewelery')
  const initialCartCount = parseInt(localStorage.getItem('cartCount')) || 0
  const [cartCount, setCartCount] = useState(initialCartCount)
  const [clickCart, setClickCart] = useState(false)
  const [search, setSearch] = useState(false)
  const [textSearch, setTextSearch] = useState('')

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
      localStorage.setItem(id, JSON.stringify(objCart))

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
      <Header cartCount={cartCount} setClickCart={setClickCart} clickCart={clickCart} setSearch={setSearch} setTextSearch={setTextSearch} />
      {
        !search ?
        <div>
          <NavBar navegation={navegation} setNavegation={setNavegation} clickCart={clickCart} />
          <Products navegation={navegation} handleCart={handleCart} clickCart={clickCart} search={search} />
        </div>
        :
        <div>
          <NavBarProduct setSearch={setSearch} />
          <Products navegation={navegation} handleCart={handleCart} clickCart={clickCart} search={search} textSearch={textSearch} setSearch={setSearch} />
        </div>
      }
      <SideBar setClickCart={setClickCart} clickCart={clickCart} setCartCount={setCartCount} cartCount={cartCount} />
    </div>
  )
}

export default App