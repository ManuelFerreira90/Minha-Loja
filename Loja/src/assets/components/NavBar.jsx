import React from 'react'
import '../css/NavBar.css'

function NavBar() {
  return (
    <div>
        <nav className='products_container'>
            <ul className='products_list'>
                <li className='products_section'>Jewelery</li>
                <li className='products_section'>Electronics</li>
                <li className='products_section'>Women's clothing</li>
                <li className='products_section'>Men's clothing</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar