import React from 'react'
import { FaCartPlus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useCartContext } from '../contexts/cart_context'

function CartButton() {
    const {total_items} = useCartContext()
  return (
    <CartContainer>
        <div className="nav-right">
        <Link to='/cart'>
        <div className="cart-btn">
            Cart <FaCartPlus/>
            <span className='total-items'>{total_items}</span>
        </div>
        </Link>
        <button className="login">
            Login <FaUserPlus/>
        </button>
        </div>
        
    </CartContainer>
  )
}
const CartContainer = styled.div`    
    a{
        color: black;
    }
    .cart-btn{
        font-size: 1.5rem;
        
    }
    .nav-right{
        display: flex;

    }
    .login{
        display: flex;
        align-items: center;
        background: transparent;
        border: transparent;
        font-size: 1.5rem;
        letter-spacing: 2px;
        cursor: pointer;
        padding-left: 20px;
    }
    .cart-btn{
        display: flex;
        align-items: center;
        position: relative;
        letter-spacing: 2px;
        color: black;
        
    }
    .total-items{
        position: absolute;
        right: -16px;
        top: -5px;
        width: 23px;
        height: 23px;
        background: hsl(22, 31%, 52%);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 0.75rem;
    }
    h3{
        font-size: 1.7rem;
    }
`
export default CartButton