import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import NavBarProduct from './NavBarProduct'
import fetchProducts from '../api/fetchProducts'
import RatingStars from './RatingStars'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import '../css/ProductDetail.css'
import SideBar from './SideBar'

function ProductDetail() {

    const { id } = useParams()

    const [product, setProduct] = useState({})
    const initialCartCount = parseInt(localStorage.getItem('cartCount')) || 0
    const [cartCount, setCartCount] = useState(initialCartCount)
    const [clickCart, setClickCart] = useState(false)

    useEffect(()=>{
        fetchProducts(`/${id}`).then((response) => {
            setProduct(response)
        })
    }, [id])

    const { image, price, title, description, rating } = product
    const rate = rating ? rating.rate : 0   
    const count = rating ? rating.count : 0 

    const handleCart = () => {
    const keys = Object.keys(localStorage)
    const idAux = parseInt(id)
    let cart = false
    let auxLocalStorage

    keys.forEach((key)=>{
      auxLocalStorage = JSON.parse(localStorage.getItem(key))
      if(auxLocalStorage.id === idAux){
        cart = true
        auxLocalStorage.amount = auxLocalStorage.amount + 1
        localStorage.setItem(key, JSON.stringify(auxLocalStorage))
      }
    })

    if(cart == false){
      const objCart = {
        id:idAux,
        amount:1
      }
      localStorage.setItem('id'+cartCount, JSON.stringify(objCart))

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
    <div>
        <Header cartCount={cartCount} setClickCart={setClickCart} clickCart={clickCart} />
        <NavBarProduct />
        <section className='product_detail'>
            <div className='product_img'>
                <img src={image} alt={title} />
            </div>
            <div className='product_info'>
                <div className='rating'>
                    <span className='sold'>Sold {count} units</span>
                    <RatingStars rate={rate}/>
                    <button 
                        className='cart_btn_detail'
                        onClick={()=>{handleCart()}}
                        >
                        <MdOutlineAddShoppingCart />
                    </button>
                </div>
                <span className='title'>{title}</span>
                <p className='pricee'>${price}</p>
                <p className='description'>{description}</p>
            </div>
        </section>
        <SideBar setClickCart={setClickCart} clickCart={clickCart} setCartCount={setCartCount} cartCount={cartCount} />
    </div>
  )
}

export default ProductDetail