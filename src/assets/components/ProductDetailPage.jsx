import React, { useState, useEffect } from 'react'
import fetchProducts from '../api/fetchProducts'
import RatingStars from '../components/RatingStars'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import useAppContext from '../hook/useAppContext'
import handleCart from '../functions/handleCart'

function ProductDetailPage() {
    const {
        setCartCount
    } = useAppContext()

    const { id } = useParams()
    
    const [product, setProduct] = useState({})

    useEffect(()=>{
        fetchProducts(`/${id}`).then((response) => {
            setProduct(response)
        })
    }, [id]) 


    const cartDetail = () => {
        const { image, price, title, description, rating } = product
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
                        onClick={()=>{handleCart(product, setCartCount)}}
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


  return (
    <div>
        {cartDetail()}
    </div>
  )
}

export default ProductDetailPage