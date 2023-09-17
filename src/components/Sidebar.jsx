import React from 'react'
import { useProductContext } from '../contexts/product_context'
import logo from '../assets/logo.svg'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constant'
import CartButton from './CartButton'
import styled from 'styled-components'

function Sidebar() {
  const {isSidebarOpen, closeSidebar} = useProductContext()
  return (
    <SidebarContainer>
      <div className={`${isSidebarOpen ? 'side-bar open' : 'side-bar'}`}>
        <div className="sidebar-header">
          <img src={logo} alt="" className='logo'/>
          <button className="close-button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
            {links.map((link)=>{
              const {url, text, id} = link
                return(
                  <li key={id}>
                    <Link to={url} className='link-to' onClick={closeSidebar}>
                      {text}
                    </Link>
                  </li>
                  
                )
            })}
            <CartButton />
          </ul>
      </div>
    </SidebarContainer>
    
  )
}
const SidebarContainer = styled.div`
  
  .side-bar{
    width: 100%;
    height: 100%;
    position: fixed;
    background: white;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 0.3s;
    transform: translateX(-100%);
  }
  .open{
    transform: translateX(0);
    z-index: 999;
  }
  .close-button{
    background: transparent;
    border: transparent;
    cursor: pointer;
    font-size: 1.7rem;
  }
  .close-button:hover{
    color: red;
  }
  .sidebar-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    width: 90vw;
    margin: 0 auto
  }
  .logo{
    width: 10rem;
  }
  .links{
    margin-bottom: 8rem;
  }
  .nav-right{
    margin: 4rem 0;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .links li{
    padding: 1rem;  
  }
  a{
    text-decoration: none;
    text-transform: capitalize;
    color: grey;
    font-size: 1.2rem;
    letter-spacing: 1px;
    padding: 0px;
    transition: 0.3s;
    
  }
  a:hover{
    
    padding: 1rem 1.5rem;
    background: #ccc;
  }
  @media screen and (min-width: 992px) {
    .side-bar {
      display: none;
    }
  }
`

export default Sidebar