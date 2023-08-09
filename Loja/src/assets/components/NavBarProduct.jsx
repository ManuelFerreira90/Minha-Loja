import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'


function NavBarProduct(props) {
  return (
    <div>
        <nav className='products_container'>
            <ul className='products_list'>
                <li 
                  className='products_section'
                  onClick={()=>props.setSearch(false)}
                  >
                  <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBarProduct