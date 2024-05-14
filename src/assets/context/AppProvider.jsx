import { AppContext }  from "./AppContext"
import { useState } from "react"

export default function AppProvider({children}) {
    const [navegation, setNavegation] = useState('jewelery')
    const initialCartCount = parseInt(localStorage.getItem('cartCount')) || 0
    const initialCart = JSON.parse(localStorage.getItem('cart')) || []
    const [cartCount, setCartCount] = useState(initialCartCount)
    const [clickCart, setClickCart] = useState(false)
    const [search, setSearch] = useState(false)
    const [textSearch, setTextSearch] = useState('')

    return (
        <AppContext.Provider 
        value={{
            cartCount,
            setCartCount,
            clickCart,
            setClickCart,
            search,
            setSearch,
            textSearch,
            setTextSearch,
            navegation,
            setNavegation,
          }}
            >
            {children}
        </AppContext.Provider>
    )
}