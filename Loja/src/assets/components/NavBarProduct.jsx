import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'


function NavBarProduct() {
  return (
    <div>
        <nav className='products_container'>
            <ul className='products_list'>
                <li 
                  className='products_section'
                  >
                  <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBarProduct