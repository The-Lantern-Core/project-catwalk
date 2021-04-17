import React from 'react';
import ProductCard from '../ProductCard.jsx'

class Related extends React.Component {

  render () {
    return (
      <div className='related_place_holder'><h1>Related Products Here</h1>
        <ProductCard />
      </div>
    )
  }
}

export default Related;