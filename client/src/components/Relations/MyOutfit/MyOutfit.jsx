import React from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx'
import Carousel from '../Carousel/Carousel.jsx'

class MyOutfit extends React.Component {

  render () {
    return (
      <div className='component-wrapper'><h3>MyOutfit</h3>
        <Carousel>
          <img src="https://via.placeholder.com/300X500" alt="placeholder" style={{ marginRight: '16px'}}/>
          <img src="https://via.placeholder.com/300X500" alt="placeholder" style={{ marginRight: '16px'}}/>
          <img src="https://via.placeholder.com/300X500" alt="placeholder" style={{ marginRight: '16px'}}/>
          <img src="https://via.placeholder.com/300X500" alt="placeholder" style={{ marginRight: '16px'}}/>
        </Carousel>
      </div>
    )
  }
}

export default MyOutfit;