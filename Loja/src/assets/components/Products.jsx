import React,{ useEffect, useState} from 'react'
import fetchProdutos from '../api/fetchProducts'
import { Link } from 'react-router-dom'
import {MdOutlineAddShoppingCart} from 'react-icons/md'
import '../css/Products.css'


function Products(props) {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    if(!props.search){
      fetchProdutos(`category/${props.navegation}`).then((response) => {
          setProducts(response)
      })
    }
    else{
      fetchProdutos('').then((response) => {
        setProducts(response)
      })
    }
  }, [props.navegation, props.search])


  const Products = () => {
      return products.map((product) => {
        const { id, image, price, title } = product
        return (
          <div key={id} className={props.clickCart ? 'card_product hide' : 'card_product'} >
            <Link to={`/productDetail/${id}`}>
              <img 
                className='card_image' 
                src={image} alt={title} 
                />
            </Link>
            <p className='cad_title price'>${price}</p>
            <p className='cad_title'>{title}</p>
            <button className='cart_btn_product' onClick={()=>{props.handleCart(id)}}> 
              <MdOutlineAddShoppingCart /> 
            </button>
          </div>
        )
      })
  }

  const ProdutcSearch = () => {
    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(props.textSearch.toLowerCase())
    })
  
    return filteredProducts.map((product) => {
          const { id, image, price, title } = product
          return (
            <div 
              key={id} 
              className={props.clickCart ? 'card_product hide' : 'card_product'} 
              >
              <Link to={`/productDetail/${id}`}>
                <img 
                  className='card_image' 
                  src={image} 
                  alt={title} 
                  onClick={typeof props.setSearch === 'function' ? () => props.setSearch(false) : null}
                  />
              </Link>
              <p className='cad_title price'>${price}</p>
              <p className='cad_title'>{title}</p>
              <button className='cart_btn_product' onClick={() => { props.handleCart(id) }}>
                <MdOutlineAddShoppingCart />
              </button>
            </div>
          )
    }
  )}

  return (
    <div className='product_container'>
      <section className={props.clickCart ? 'card_section hide' : 'card_section'}>
        {props.search ? ProdutcSearch() : Products()}
      </section>
    </div>
  )
}

export default Products