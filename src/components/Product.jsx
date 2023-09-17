import React from 'react'
import { styled } from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'

function Product({id, name, price, image}) {
  return (
    <Wrapper>        
      <div className="main">
            <div className="container">
                <img src={image} alt={name}/>
                <Link to={`/products/${id}`} className='link'>
                    <FaSearch />
                </Link>
            </div>
            <footer>
                <h5>{name}</h5>
                <p>{formatPrice(price)}</p>
            </footer>       
          </div> 
    </Wrapper>
  )
}
const Wrapper = styled.article`

.container {
    position: relative;
    background: #222;
    border-radius: 4px;
    
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 4px;
    transition: 0.3s;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background:  hsl(22, 31%, 52%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: 0.3s;
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: white;
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: hsl(22, 31%, 52%);
    letter-spacing: 1px;
  }
 
`
export default Product