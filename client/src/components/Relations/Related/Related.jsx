import React from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx'
import Carousel from '../Carousel/Carousel.jsx'

class Related extends React.Component {

  render () {
    return (
      <div className='related-products-container'><h3>Related Products</h3>
        <Carousel>
          <img src="https://via.placeholder.com/300X500" alt="placeholder" style={{ marginRight: '16px'}}/>
          <img src="https://via.placeholder.com/300X500" alt="placeholder" style={{ marginRight: '16px'}}/>
          <img src="https://via.placeholder.com/300X500" alt="placeholder" style={{ marginRight: '16px'}}/>
          <img src="https://via.placeholder.com/300X500" alt="placeholder" style={{ marginRight: '16px'}}/>
          <img src="https://via.placeholder.com/300X500" alt="placeholder"/>
        </Carousel>
      </div>
    )
  }
}

export default Related;