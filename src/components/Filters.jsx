import React from 'react'
import { styled } from 'styled-components'
import { formatPrice, getUniqueValues } from '../utils/helpers'
import { useFilterContext } from '../contexts/filter_context'
import { FaCheck } from 'react-icons/fa'

function Filter() {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext()
  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')
  
  return (
    <Wrapper>
      <div className='content'>
      <form onSubmit={(e)=> e.preventDefault()}>
        {/** For search/text */}
        <div className="form-control">
          <input
           type="text"
           placeholder='search'
           className='search-input'
           name='text'
           value={text}
           onChange={updateFilters}           
           />
          </div>
          {/** For category */}
           <div className="form-control">
            <h5>Category</h5>
            <div>
            {categories.map((c, index)=>{                
                return(
                  <button
                  key={index}
                  name='category'
                  value={c}
                  type='button'
                  onClick={updateFilters}
                  className={`${
                    category === c.toLowerCase() ? 'active' : null
                  }`}

                  >{c}
                  </button>
                )                
            })}
            </div>              
        </div>
        {/** For company */}
        <div className="form-control">
            <h5>Company</h5>
            <select
             name="company"
             value={company}
             className='company'
             onChange={updateFilters}
             >
              {companies.map((c, index)=>{
                return(
                  <option value={c} key={index}>{c}</option>
                )
              })}
             </select>
        </div>
        {/**For color */}
        <div className="form-control">
        <h5>colors</h5>
            <div className='colors'>
          {colors.map((c, index)=>{
            if(c === 'all'){
              return(
                <button
                key={index}
                 name='color'
                 data-color='all'
                 onClick={updateFilters}                 
                 className={`${color === 'all' ? 'all-btn active' : 'all-btn'}`}
                >
                  all
                </button>
              )
            }
            return(
              <button
               key={index}
               name='color'
               data-color={c}
               style={{background: c}}
               onClick={updateFilters}
               className={`${color === c ? 'color-btn active' : 'color-btn'}`}
              >
                {color === c ? <FaCheck/> : null}
              </button>
            )
          })}
        </div>
        </div>
        {/**For Price */}
        <div className="form-control">
          <h5>Price</h5>
          <p className='price'>{formatPrice(price)}</p>
          <input
           type="range"
           className='price'
           name='price'
           value={price}
           min={min_price}
           max={max_price}
           onChange={updateFilters}
            />
        </div>
        {/** For shipping */}
        <div className='form-control shipping'>
            <label htmlFor='shipping'>free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={updateFilters}
              />
        </div>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          clear filters
        </button>        
      </form>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.form-control {
  margin-bottom: 1.25rem;
  h5 {
    margin-bottom: 0.5rem;
  }
}
.search-input {
  padding: 0.5rem;
  background: hsl(210, 36%, 96%);
  border-radius: 0.25rem;
  border-color: transparent;
  letter-spacing: 0.1rem;
}
.search-input::placeholder {
  text-transform: capitalize;
}

button {
  display: block;
  margin: 0.25em 0;
  padding: 0.25rem 0;
  text-transform: capitalize;
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  letter-spacing: 0.1rem;
  color: hsl(210, 22%, 49%);
  cursor: pointer;
}
.active {
  border-color: hsl(210, 22%, 49%);
}
.company {
  background:  hsl(210, 36%, 96%);
  border-radius: 0.25rem;
  border-color: transparent;
  padding: 0.25rem;
}
.colors {
  display: flex;
  align-items: center;
}
.color-btn {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #222;
  margin-right: 0.5rem;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 0.5rem;
    color: #fff;
  }
}
.all-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  opacity: 0.5;
}
.active {
  opacity: 1;
}
.all-btn .active {
  text-decoration: underline;
}
.price {
  margin-bottom: 0.25rem;
}
.shipping {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  text-transform: capitalize;
  column-gap: 0.5rem;
  font-size: 1rem;
}
.clear-btn {
  background: hsl(360, 67%, 44%);
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
@media (min-width: 768px) {
  .content {
    position: sticky;
    top: 1rem;
  }
}
`

export default Filter