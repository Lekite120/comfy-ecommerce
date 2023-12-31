import React from 'react'
import ListView from './ListView'
import GridView from './GridView'
import { useFilterContext } from '../contexts/filter_context'


function ProductList() {
  const {filtered_products: products, grid_view } = useFilterContext()
  if(products.length < 1){
    return(
      <h5 style={{ textTransform: 'none' }}>
          Sorry, no products matched your search.
        </h5>
      )
  }  
    if (grid_view === false) {
      return <ListView products={products} />
    }
    return <GridView products={products} />
}

export default ProductList