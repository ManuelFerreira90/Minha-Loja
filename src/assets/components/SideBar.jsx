import React,{ useEffect, useState, useMemo } from 'react'
import {GrFormClose} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import '../css/SideBar.css';
import useAppContext from '../hook/useAppContext'
import pushCart from '../functions/pushCart'
import removeCart from '../functions/removeCart'

function SideBar() {
  const {
    setClickCart,
    clickCart,
    setCartCount,
    cartCount
  } = useAppContext()
    
  const [cartProduct, setCartProduct] = useState([])

  useEffect(() => {
    if (clickCart) {
      pushCart(setCartProduct)
    }
  }, [clickCart, cartCount])


  let amout = 0
  
  const objCart = () => {
    return cartProduct.map((product) => {
      const { id, image, price, title } = product
      amout += parseFloat(price)
      return (
        <div key={id} className='card_product_cart' onClick={() => {}}>
          <Link to={`/Minha-Loja/productDetail/${id}`}>
            <img className='card_image_cart' src={image} alt={title} />
          </Link>
          <div className='product_cart_info'>
            <p className='cad_title_price_cart'>${price}</p>
          </div>
          <button className='remove_cart_btn' onClick={()=>{removeCart(setCartProduct, id, setCartCount)}}>
            <MdOutlineRemoveShoppingCart />
          </button>
        </div>
      )
    })
  }

  return (
    <section className={clickCart ? 'cart_bar open' : 'cart_bar'}>
        <div className='cart_product'>
            {objCart()}
        </div>
        <div className='value_cart_container'>
           <div className='value_cart'>
             Amount: <span className='cad_title_price_cart'>${amout.toFixed(2)}</span>
           </div>
        </div>
        <button className='close_cart' onClick={()=>{
            setClickCart(false)
            }}>
            <GrFormClose />
        </button>
    </section>
  )
}

export default SideBar

