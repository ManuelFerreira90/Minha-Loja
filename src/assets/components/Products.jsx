import React,{ useEffect, useState} from 'react'
import fetchProdutos from '../api/fetchProducts'
import { Link } from 'react-router-dom'
import {MdOutlineAddShoppingCart} from 'react-icons/md'
import handleCart from '../functions/handleCart'
import useAppContext from '../hook/useAppContext'
import { useParams } from 'react-router-dom'
import '../css/Products.css'

function Products() {
  const {
    navegation,
    search,
    setCartCount
  } = useAppContext()

  const [products, setProducts] = useState([])

  const currentHref = window.location.href.split('/')
  const SearchIndex = currentHref.indexOf('search')

  let searchp
  if (SearchIndex !== -1) {
    const { searchproduct } = useParams()
    searchp = searchproduct
  }

  useEffect(()=>{
    if(!search){
      fetchProdutos(`category/${navegation}`).then((response) => {
          setProducts(response)
      })
    }
    else{
      fetchProdutos('').then((response) => {
        setProducts(response)
      })
    }
  }, [navegation, search])


  const ProductsCart = (Products) => {
    let lastProducts = []
    if(search && SearchIndex !== -1){
      lastProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchp.toLowerCase())
      })
    }
    else{
      lastProducts = Products
    }
    return lastProducts.map((product) => {
      const { id, image, price, title } = product
      return (
        <div key={id} className='card_product' >
          <Link to={`/Minha-Loja/productDetail/${id}`}>
            <img 
              className='card_image' 
              src={image} alt={title} 
              />
          </Link>
          <p className='cad_title price'>${price}</p>
          <p className='cad_title'>{title}</p>
          <button className='cart_btn_product' onClick={()=>{handleCart(product, setCartCount)} }> 
            <MdOutlineAddShoppingCart /> 
          </button>
        </div>
      )
    })
}


  return (
    <div className='product_container'>
      <section className='card_section'>
        {ProductsCart(products)}
      </section>
    </div>
  )
}

export default Products