import React,{ useEffect, useState } from 'react'
import fetchProdutos from '../api/fetchProducts'
import {GrFormClose} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import '../css/SideBar.css';


function SideBar(props) {
    
  const [cartProduct, setCartProduct] = useState([]);
  const [cartApi, setCartApi] = useState([])
  const [auxConst, setAuxConst] = useState(0);

  let auxLocalStorage

  const pushCartLocalStorage = () =>{
      const keys = Object.keys(localStorage)
      let cartItem = []

      keys.forEach((key)=>{
          auxLocalStorage = JSON.parse(localStorage.getItem(key))
          if(auxLocalStorage.id != null && auxLocalStorage.id != undefined){
              cartItem.push(auxLocalStorage)
          }
          setCartProduct(cartItem)
      })
  }

  const getApi = () => {
    const apiPromises = cartProduct.map((product) => {
        return fetchProdutos(`${product.id}`)
    })

    Promise.all(apiPromises)
        .then((responses) => {
            setCartApi(responses)
        })
        .catch((error) => {
            console.error("Error fetching API:", error)
        })
  }

  useEffect(() => {
      if (props.clickCart && auxConst === 0) {
        pushCartLocalStorage()
        setAuxConst(2)
      }
      else if (!props.clickCart){
          setAuxConst(0)
      }
      else if(auxConst === 2){
          getApi()
          setAuxConst(3)
      }
  }, [props.clickCart, auxConst])

  let amout = 0
  
  const objCart = () => {
    return cartApi.map((product) => {
      const { id, image, price, title } = product
      amout += parseFloat(price)
      return (
        <div key={id} className='card_product_cart' onClick={() => {}}>
          <Link to={`/productDetail/${id}`}>
            <img className='card_image_cart' src={image} alt={title} />
          </Link>
          <div className='product_cart_info'>
            <p className='cad_title_price_cart'>${price}</p>
          </div>
          <button className='remove_cart_btn' onClick={()=>{removeCart(id)}}>
            <MdOutlineRemoveShoppingCart />
          </button>
        </div>
      )
    })
  }
  
  const removeCart = (id) => {
    const keys = Object.keys(localStorage)

    keys.forEach((key)=>{
        auxLocalStorage = JSON.parse(localStorage.getItem(key))
        if(auxLocalStorage.id != null && auxLocalStorage.id != undefined){
            if(auxLocalStorage.id == id){
              const updatedCartApi = cartApi.filter((product) => product.id !== id);
              localStorage.removeItem(key)
              
              setCartApi(updatedCartApi);

              const auxCartCount = props.cartCount - 1
              props.setCartCount(auxCartCount)
              localStorage.setItem('cartCount', auxCartCount)
            }
        }
    })
  }

  const handleStorageChange = () => {
    setCartApi([])
  }

  useEffect(() => {
    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return (
    <section className={props.clickCart ? 'cart_bar open' : 'cart_bar'}>
        <div className='cart_product'>
            {objCart()}
        </div>
        <div className='value_cart_container'>
           <div className='value_cart'>
             Amount: <span className='cad_title_price_cart'>${amout}</span>
           </div>
        </div>
        <button className='close_cart' onClick={()=>{
            props.setClickCart(false)
            }}>
            <GrFormClose />
        </button>
    </section>
  )
}

export default SideBar

