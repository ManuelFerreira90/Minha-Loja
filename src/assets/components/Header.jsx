import React,{ useState } from 'react'
import {BsSearch, BsCart2} from 'react-icons/bs'
import useAppContext from '../hook/useAppContext'
import '../css/Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {
    const {
        cartCount,
        setClickCart,
        clickCart,
        setSearch,
    } = useAppContext()

    const[text, setText] = useState('')
    const navigate = useNavigate()

    const handleText = (e) => {
        setText(e)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if(text != ''){
            setSearch(true)
            navigate(`/Minha-Loja/search/${text}`)
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
                    onClick={()=>{setClickCart(!clickCart)}}
                    > 
                    <BsCart2/>
                    {cartCount == 0 ? '' : <span className='cart_info'>{cartCount}</span>} 
                </button>
            
        </div>

    </header>
  )
}

export default Header