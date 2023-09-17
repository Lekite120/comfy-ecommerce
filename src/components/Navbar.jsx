import React from 'react'
import logo from '../assets/logo.svg'
import styled from 'styled-components'
import { links } from '../utils/constant'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import CartButton from './CartButton'
import { useProductContext } from '../contexts/product_context'

function Navbar() {
  const {openSidebar} = useProductContext()
  return (
    <NavContainer>
      
        <div className="nav-center">
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt="" className='logo'/>
          </Link>
          <button className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
          </div>
          <ul className='links'>
            {links.map((link)=>{
              const {url, text, id} = link
                return(
                  <li key={id}>
                    <Link to={url} className='link-to'>
                      {text}
                    </Link>
                  </li>                  
                )
            })}            
          </ul>                             
        
        <CartButton />        
      </div>
    </NavContainer>
  )
}
const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .nav-center{
    width: 90vw;
    max-width: 1150px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .nav-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo{
    width: 11rem;    
  }
  .links{
    display: none;
  }
  .nav-right{
    display: none;
  }
  .nav-toggle{
    position: absolute;
    right: 3rem;
  }
  @media (min-width: 992px){
    .links{
      display: flex;
      justify-content: center;
    }
    
    .nav-toggle{
      display: none;
    }    
    .nav-right{
      display: flex;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
  } 
  
  a{
    text-decoration: none;
    text-transform: capitalize;
    color: grey;
    font-size: 1rem;
    letter-spacing: 1px;
    padding: 0 14px;
  }  
  .nav-toggle{
    background: transparent;
    border: transparent;
    font-size: 1.7rem;
    cursor: pointer;
  }
`

export default Navbar