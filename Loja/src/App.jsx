import React,{ useEffect, useState} from 'react'
import Header from './assets/components/Header'
import NavBar from './assets/components/NavBar'
import Products from './assets/components/Products'


function App() {

  const [navegation, setNavegation] = useState('jewelery')

  return (
  <>
    <div>
      <Header />
      <NavBar navegation={navegation} setNavegation={setNavegation} />
      <Products navegation={navegation} />
    </div>
  </>
  )
}

export default App