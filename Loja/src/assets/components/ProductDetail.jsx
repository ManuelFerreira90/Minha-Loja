import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import NavBarProduct from './NavBarProduct'
import fetchProducts from '../api/fetchProducts'
import RatingStars from './RatingStars'
import '../css/ProductDetail.css'

function ProductDetail() {

    const { id } = useParams()

    const [product, setProduct] = useState({})

    useEffect(()=>{
        fetchProducts(`/${id}`).then((response) => {
            setProduct(response)
        })
    }, [id])

    const { image, price, title, description, rating } = product
    const rate = rating ? rating.rate : 0   
    const count = rating ? rating.count : 0 

  return (
    <div>
        <Header />
        <NavBarProduct />
        <section className='product_detail'>
            <div className='product_img'>
                <img src={image} alt={title} />
            </div>
            <div className='product_info'>
                <div className='rating'>
                    <span className='sold'>Sold {count} units</span>
                    <RatingStars rate={rate}/>
                </div>
                <span className='title'>{title}</span>
                <p className='pricee'>${price}</p>
                <p className='description'>{description}</p>
            </div>
        </section>
    </div>
  )
}

export default ProductDetail