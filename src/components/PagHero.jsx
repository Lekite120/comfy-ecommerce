import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
function PagHero({title, product}) {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to='/'>
            Home
          </Link> 
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
        </div>  
    </Wrapper>
  )
}
const Wrapper = styled.div`

background:  hsl(22, 31%, 88%);
width: 100%;
min-height: 20vh;
display: flex;
align-items: center;

color: hsl(22, 28%, 21%);
a {
  color: hsl(22, 28%, 37%);
  padding: 0.5rem;
  transition: 0.3s;
}
a:hover {
  color: hsl(22, 28%, 21%);
}
    
    
  
`

export default PagHero