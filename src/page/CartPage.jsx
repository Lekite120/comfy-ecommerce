import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PagHero from '../components/PagHero'
import CartItems from '../components/CartContent'
import { useCartContext } from '../contexts/cart_context'
const CartPage = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <main>
      <PagHero title='cart' />
      <Wrapper className='page'>
        <CartItems />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage