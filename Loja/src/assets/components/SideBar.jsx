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
    let divApi = []

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
        let geItemApi = []
        cartProduct.forEach((productApi)=>{
            return(
                fetchProdutos(`${productApi.id}`).then((response) => {
                    geItemApi.push(response)
                })
            )
        })
        setCartApi(geItemApi)
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

/*     useEffect(()=>{
        fetchProdutos('1').then((response) => {
            setCartApi(response)
        })
    }, []) */

    console.log(cartApi)
  
    const objCart = () => {
      divApi = cartApi.map((product) => {
        const { id, image, price, title } = product
        return (
          <div key={id} className='card_product_cart' onClick={() => {}}>
            <Link to={`/productDetail/${id}`}>
              <img className='card_image_cart' src={image} alt={title} />
            </Link>
            <div className='product_cart_info'>
              <p className='cad_title_price_cart'>${price}</p>
              <p className='quantity_product'>Quantity: </p>
            </div>
            <button className='remove_cart_btn'>
              <MdOutlineRemoveShoppingCart />
            </button>
          </div>
        )
      })
    }

  return (
    <section className={props.clickCart ? 'cart_bar open' : 'cart_bar'}>
        <div className='cart_product'>
            {objCart()}
        </div>
        <div className='value_cart_container'>
           <div className='value_cart'>
             Amount: <span className='cad_title_price_cart'>$100</span>
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

