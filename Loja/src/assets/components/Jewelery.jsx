import React, { useEffect, useState } from 'react'
import fetchProdutos from '../api/fetchProducts'

function Jewelery() {

    const [productsJewelery, setProductsJewelery] = useState([])

    useEffect(()=>{
        fetchProdutos('/category/jewelery').then((response) => {
            setProductsJewelery(response)
        })
    }, [])

    const jeweleryProducts = () => {
        return productsJewelery.map((product) => {
          const { id, image, price, title } = product
          return (
            <div key={id} className='card_product'>
              <img className='card_image' src={image} alt={title} />
              <p className='cad_title price'>${price}</p>
              <p className='cad_title'>{title}</p>
            </div>
          )
        })
    }
      
  return (
    <>
        {jeweleryProducts()}
    </>
  )
}

export default Jewelery