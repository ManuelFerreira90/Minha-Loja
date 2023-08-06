import React,{ useState } from 'react'
import '../css/NavBar.css'

function NavBar(props) {

  const [active, setActive] = useState(1)

  const handleLi = (e) => {
    const encodedCategory = encodeURIComponent(e)
    props.setNavegation(encodedCategory);
  } 

  return (
    <div>
        <nav className='products_container'>
            <ul className={active == 1 ? 'products_list  '}>
                <li 
                  id='1'
                  className='products_section'
                  onClick={()=>{handleLi('jewelery')}}
                  >
                  Jewelery
                </li>
                <li 
                  id='2'
                  className='products_section'
                  onClick={()=>handleLi('eletronics')}
                  >
                  Electronics
                </li>
                <li 
                  id='3'
                  className='products_section'
                  onClick={()=>{handleLi("Women's clothing")}}
                  >
                  Women's clothing
                </li>
                <li 
                  id='5'
                  className='products_section'
                  onClick={()=>{handleLi("Men's clothing")}}
                  >
                  Men's clothing
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar