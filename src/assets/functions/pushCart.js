const pushCart = (setCartProduct) =>{
    const initialCart = JSON.parse(localStorage.getItem('cart')) ?? []
    setCartProduct(initialCart)
}

export default pushCart