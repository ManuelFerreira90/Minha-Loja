import React,{ useEffect, useState} from 'react'
import Header from './assets/components/Header'
import NavBar from './assets/components/NavBar'
import Products from './assets/components/Products'
import Cart from './assets/components/Cart'


function App() {

  const [navegation, setNavegation] = useState('jewelery')
  const [produtctPage, setProductPage] = useState({})
  const [cartCount, setCartCount] = useState(0)

  const handleCart = (props) => {
    
  }

  return (
  <>
    <div>
      <Header cartCount={cartCount} />
      <NavBar navegation={navegation} setNavegation={setNavegation} />
      <Products navegation={navegation} handleCart={handleCart}/>
    </div>
  </>
  )
}

export default App