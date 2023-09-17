import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../contexts/cart_context'
import { Link } from 'react-router-dom'
import CartColumn from './CartColumn'
import CartItem from './CartItem'
import CartTotal from './CartTotal'
const CartItems = () => {
  const { cart, clearCart } = useCartContext()

  return (
    <Wrapper className='section section-center'>
      <CartColumn />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <div className='link-container'>
      <Link to='/products' className='link-btn'>
          continue shopping
        </Link>
        <button
          type='button'
          className='link-btn clear-btn'
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotal />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: hsl(22, 31%, 52%);
    color: #fff;
    border-radius: 4px;
    letter-spacing: 1px;
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: #222;
  }
`
export default CartItems