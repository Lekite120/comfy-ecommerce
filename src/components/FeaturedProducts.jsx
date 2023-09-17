import React from 'react'
import { styled } from 'styled-components'
import { useProductContext } from '../contexts/product_context'
import Product from './Product'
import Loading from './Loading'
import Error from './Error'
import { Link } from 'react-router-dom'

function FeaturedProducts() {
    const {featured_products: featured, products_loading: loading, products_error: error} = useProductContext()
    if(loading){
        return <Loading />
    }
    if(error){
        return <Error />                
    }
    console.log(featured)
  return (
    <Wrapper className='section'>        
        <div className="title">
            <h2>Featured Products</h2>
            <div className="underline"></div>
        </div>
        <div className="section-center featured">
            {featured.slice(0, 3).map((product)=>{
                 return <Product {...product} key={product.id}/>                    
            })}
        </div>                   
        <Link to='/products' className='btn'>
            all products
        </Link>
    </Wrapper>
  )
}
const Wrapper = styled.section`

background: hsl(210, 36%, 96%);
.featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;      
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    
    }
  }    
    
`

export default FeaturedProducts