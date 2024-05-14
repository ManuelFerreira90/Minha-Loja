import React,{ useEffect, useState } from 'react'
import useAppContext from '../hook/useAppContext'
import { Link, useLocation  } from 'react-router-dom'
import '../css/NavBar.css'

function NavBar() {
  const {
    navegation,
    setNavegation,
    clickCart,
    search,
    setSearch
  } = useAppContext()

  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const lastSegment = pathSegments[pathSegments.length - 2];
  const isHomePage = lastSegment === 'Minha-Loja';

  console.log(lastSegment)

  const [homePage, setHomePage] = useState(false);

  useEffect(() => {
    if (isHomePage) {
      setHomePage(false)
    }
    else{
      setHomePage(true)
    }
  }, [isHomePage]);

  const [active, setActive] = useState('1')

  const handleNavegation = (e) => {
    const encodedCategory = encodeURIComponent(e)
    setNavegation(encodedCategory);
  } 

  const handleLi = (e) => {
    const aux = e.target.getAttribute("id")
    switch (aux) {
      case '1':
        setActive('1')
        break
      case '2':
        setActive('2')
        break
      case '3':
        setActive('3')
        break
        case '4':
      setActive('4')
      break
      default:
        break
    }
  }

  return (
    <div>
        <nav className='products_container'>
            {
              search || homePage ?
                <ul className='products_list'>
                  <li 
                    className='products_section'
                    onClick={typeof setSearch === 'function' ? () => setSearch(false) : null}
                    >
                    <Link to='/Minha-Loja/'>Home</Link>
                  </li>
                </ul>
              :
                <ul className='products_list'>
                  <li 
                    id='1'
                    className={active == 1 ? 'products_section  active' : 'products_section'}
                    onClick={(e)=>{
                      handleNavegation('jewelery')
                      handleLi(e)
                    }}
                    >
                    Jewelery
                  </li>
                  <li 
                    id='2'
                    className={active == 2 ? 'products_section  active' : 'products_section'}
                    onClick={(e)=>{
                      handleNavegation('electronics')
                      handleLi(e)
                    }}
                    >
                    Electronics
                  </li>
                  <li 
                    id='3'
                    className={active == 3 ? 'products_section  active' : 'products_section'}
                    onClick={(e)=>{
                      handleNavegation("women's clothing")
                      handleLi(e)
                    }}
                    >
                    Women's clothing
                  </li>
                  <li 
                    id='4'
                    className={active == 4 ? 'products_section  active' : 'products_section'}
                    onClick={(e)=>{
                      handleNavegation("men's clothing")
                      handleLi(e)
                    }}
                    >
                    Men's clothing
                  </li>
              </ul>
            }
        </nav>
    </div>
  )
}

export default NavBar