import React, { useEffect, useState } from 'react';
import fetchProdutos from '../api/fetchProducts';
import '../css/Products.css'

function Products() {
  
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetchProdutos('1').then((response) => {
            setProducts(response)
        })
    }, [])

    console.log(products)   

    const { category, description, id, image, price } = products;

  return (
    <section className='card_section'>
        <div className='card_product'>
            <img className='card_image' src={image} alt="" />
            <p>{price}</p>
            <p>{category}</p>
        </div>
        <div className='card_product'>
            <img className='card_image' src={image} alt="" />
            <p>{price}</p>
            <p>{category}</p>
        </div>
        <div className='card_product'>
            <img className='card_image' src={image} alt="" />
            <p>{price}</p>
            <p>{category}</p>
        </div>
        <div className='card_product'>
            <img className='card_image' src={image} alt="" />
            <p>{price}</p>
            <p>{category}</p>
        </div>
    </section>
  );
}

export default Products;
