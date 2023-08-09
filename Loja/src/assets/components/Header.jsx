import React,{ useState } from 'react'
import {BsSearch, BsCart2} from 'react-icons/bs'
import '../css/Header.css'

function Header(props) {

    const[text, setText] = useState('')

    const handleText = (e) => {
        setText(e)
    }

  return (
    <header>

        <div className='container'>

            <form className='search_container'>
                <input type="search" placeholder='Search for products' className='input_produtos' onChange={(e)=>handleText(e.target.value)} required/>
                <button className='search_btn' 
                    onClick={()=>{
                        props.setSearch(true)
                        props.setTextSearch(text)
                    }}
                    > 
                    <BsSearch/> 
                </button>
            </form>

            <button className='cart_btn' onClick={()=>props.setClickCart(props.clickCart ? false : true)}> 
                <BsCart2/>
                {props.cartCount == 0 ? '' : <span className='cart_info'>{props.cartCount}</span>} 
            </button>
            
        </div>

    </header>
  )
}

export default Header