import React from 'react'
import {BsSearch, BsCart2} from 'react-icons/bs'
import '../css/Header.css'

function Header() {
  return (
    <header>

        <div className='container'>

            <form className='search_container'>
                <input type="search" placeholder='Search for products' className='input_produtos' required/>
                <button className='search_btn'> 
                    <BsSearch/> 
                </button>
            </form>

            <button className='cart_btn'> 
                <BsCart2/>
                <span className='cart_info'>1</span> 
            </button>
            
        </div>

    </header>
  )
}

export default Header