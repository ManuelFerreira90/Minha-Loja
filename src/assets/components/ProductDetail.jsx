import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import NavBarProduct from './NavBarProduct'
import fetchProducts from '../api/fetchProducts'
import RatingStars from './RatingStars'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import '../css/ProductDetail.css'
import SideBar from './SideBar'
import Products from './Products'

function ProductDetail() {

    const { id } = useParams()

    const [product, setProduct] = useState({})
    const initialCartCount = parseInt(localStorage.getItem('cartCount')) || 0
    const [cartCount, setCartCount] = useState(initialCartCount)
    const [clickCart, setClickCart] = useState(false)
    const [search, setSearch] = useState(false)
    const [textSearch, setTextSearch] = useState('')

    useEffect(()=>{
        fetchProducts(`/${id}`).then((response) => {
            setProduct(response)
        })
    }, [id]) 

    const handleCart = (ide) => {
      console.log(ide)
    const keys = Object.keys(localStorage)
    /* const idAux = parseInt(id) */
    let cart = false
    let auxLocalStorage

    keys.forEach((key)=>{
      auxLocalStorage = JSON.parse(localStorage.getItem(key))
        if(auxLocalStorage.id === ide){
          cart = true
          auxLocalStorage.amount = auxLocalStorage.amount + 1
          localStorage.setItem(key, JSON.stringify(auxLocalStorage))
        }
    })

    if(cart == false){
      const objCart = {
        id:ide,
        amount:1
      }
      localStorage.setItem(ide, JSON.stringify(objCart))

      const aux = cartCount + 1
      setCartCount(aux)
      localStorage.setItem('cartCount', aux)
    }
  }

  const cartDetail = () => {
    const { image, price, title, description, rating, id } = product
    const rate = rating ? rating.rate : 0   
    const count = rating ? rating.count : 0
    return(
      <div>
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
                    onClick={()=>{handleCart(id)}}
                    >
                    <MdOutlineAddShoppingCart />
                </button>
            </div>
            <span className='title'>{title}</span>
            <p className='pricee'>${price}</p>
            <p className='description'>{description}</p>
        </div>
      </section>
      </div>
    )
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
        <Header cartCount={cartCount} setClickCart={setClickCart} clickCart={clickCart} setSearch={setSearch} setTextSearch={setTextSearch} />
        <NavBarProduct />
        {
          !search ?
            cartDetail()
          :
            <Products navegation='' handleCart={handleCart} clickCart={clickCart} search={search} textSearch={textSearch} setSearch={setSearch} />
        }
        <SideBar setClickCart={setClickCart} clickCart={clickCart} setCartCount={setCartCount} cartCount={cartCount} />
    </div>
  )
}

export default ProductDetail