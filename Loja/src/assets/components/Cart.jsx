import React, { useState } from 'react'

function Cart(props) {

    const handleCartCount = () => {
        const count = cartCount + 1
        setCartCount(count)
    }

}

export default Cart