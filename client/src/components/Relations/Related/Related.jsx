import React from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx'
import Carousel from '../Carousel/Carousel.jsx'

class Related extends React.Component {

  render () {
    return (
      <div className='related-products-container'><h1>Related Products</h1>
        <Carousel>
          <img src="https://via.placeholder.com/400X650" alt="placeholder" style={{ marginRight: '4px'}}/>
          <img src="https://via.placeholder.com/400X650" alt="placeholder" style={{ marginRight: '4px'}}/>
          <img src="https://via.placeholder.com/400X650" alt="placeholder" style={{ marginRight: '4px'}}/>
          <img src="https://via.placeholder.com/400X650" alt="placeholder" style={{ marginRight: '4px'}}/>
        </Carousel>
      </div>
    )
  }
}

export default Related;