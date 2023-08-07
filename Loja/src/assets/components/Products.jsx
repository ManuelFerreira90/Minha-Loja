import React,{ useEffect, useState} from 'react'
import fetchProdutos from '../api/fetchProducts'
import { Link } from 'react-router-dom'
import '../css/Products.css'


function Products(props) {

  const [products, setProducts] = useState([])

  useEffect(()=>{
      fetchProdutos(`category/${props.navegation}`).then((response) => {
          setProducts(response)
      })
  }, [props.navegation])

  /* e.target.getAttribute("id") */

  const Products = () => {
      return products.map((product) => {
        const { id, image, price, title } = product
        return (
          <div key={id} className='card_product' onClick={()=>{}}>
            <Link to={`/productDetail/${id}`}>
              <img className='card_image' src={image} alt={title} />
            </Link>
              <p className='cad_title price'>${price}</p>
              <p className='cad_title'>{title}</p>
            
          </div>
        )
      })
  }

  return (
    <section className='card_section'>
      {Products()}
    </section>
  )
}

export default Products