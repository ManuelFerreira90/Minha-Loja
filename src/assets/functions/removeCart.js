const removeCart = (setCartProduct, id, setCartCount) =>{
    const initialCart = JSON.parse(localStorage.getItem('cart')) ?? []
    const initialCartCount = parseInt(localStorage.getItem('cartCount'))

    const removeItemFromCart = (productId) => {
        const updatedCart = initialCart.filter((item) => item.id !== productId)
        setCartProduct(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
      }
      
    initialCart.forEach((item) => {
        if (item.id === id) {
          removeItemFromCart(item.id)
        }
    })

    
    const aux = initialCartCount - 1
    setCartCount(aux)
    localStorage.setItem('cartCount', aux)
}

export default removeCart