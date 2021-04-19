import React from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx'
import Carousel from '../Carousel/Carousel.jsx'

class MyOutfit extends React.Component {

  render () {
    return (
      <div className='myoutfit-products-container'><h1>MyOutfit</h1>
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

export default MyOutfit;