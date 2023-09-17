import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import PagHero from '../components/PagHero'
import { useProductContext } from '../contexts/product_context'
import { single_product_url as url } from '../utils/constant'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import ProductImages from '../components/ProductImages'
import { formatPrice } from '../utils/helpers'
import AddToCart from '../components/AddToCart'

function SingleProduct() {
  const {
     single_product_loading: loading,
     single_product: product,
     single_product_error: error,
     fetchSingleProduct
    } = useProductContext()
  /*const {navigate} = useNavigate()*/
  const {id} = useParams()

  useEffect(()=>{
    fetchSingleProduct(`${url}${id}`)
  }, [id])

/*  useEffect(()=>{
    if(error){
      setTimeout(()=>{
        navigate('/')
      }, 3000)
    }
  }, [error])
*/
  if(error){
    return <Error />
  }

  if(loading){
    return <Loading/>
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <Wrapper>
      <PagHero title={name} product/>              
        <div className="section section-center page">
          <Link to='/products' className='btn'>
            back to products
          </Link>
          <div className='product-center'>
          <ProductImages images={images} />
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className='info'>
              <span>SKU :</span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand :</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
        </div>      
    </Wrapper>
  )
}
const Wrapper = styled.section`
.product-center {
  display: grid;
  gap: 4rem;
  margin-top: 2rem;
}
.price {
  color: hsl(22, 31%, 52%);
}
.desc {
  line-height: 2;
  max-width: 45em;
}
.info {
  text-transform: capitalize;
  width: 300px;
  display: grid;
  grid-template-columns: 125px 1fr;
  span {
    font-weight: 700;
  }
}

@media (min-width: 992px) {
  .product-center {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .price {
    font-size: 1.25rem;
  }
}
`

export default SingleProduct