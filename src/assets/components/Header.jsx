import React,{ useState } from 'react'
import {BsSearch, BsCart2} from 'react-icons/bs'
import '../css/Header.css'

function Header(props) {

    const[text, setText] = useState('')

    const handleText = (e) => {
        setText(e)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if(text != ''){
            props.setSearch(true)
            props.setTextSearch(text)
        }
    }

  return (
    <header>

        <div className='container'>

            <form className='search_container' onSubmit={handleSearch}>
                <input type="search"
                    placeholder='Search for products'
                    className='input_produtos' 
                    onChange={(e)=>handleText(e.target.value)} required
                />
                <button className='search_btn' type='submit'> 
                    <BsSearch/> 
                </button>
            </form>

            <button 
                className='cart_btn'
                onClick={()=>{props.setClickCart(!props.clickCart)}}
                > 
                <BsCart2/>
                {props.cartCount == 0 ? '' : <span className='cart_info'>{props.cartCount}</span>} 
            </button>
            
        </div>

    </header>
  )
}

export default Header