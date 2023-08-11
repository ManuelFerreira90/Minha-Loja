const handleCart = (product, setCartCount) => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) ?? []
    const initialCartCount = parseInt(localStorage.getItem('cartCount')) || 0
    let cart = false

    initialCart.forEach((key)=>{
      if(key.id === product.id){
        cart = true
      }
    })

    if(cart == false){
      const objCart = {
        id:product.id,
        price:product.price,
        image:product.image,
        title:product.title
      }
      initialCart.push(objCart)
      
      localStorage.setItem('cart', JSON.stringify(initialCart))

      const aux = initialCartCount + 1
      setCartCount(aux)
      localStorage.setItem('cartCount', aux)
    }
}

export default handleCart