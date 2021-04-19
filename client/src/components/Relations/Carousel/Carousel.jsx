import React from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx'
import StarRating from '../../starRating.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starRate: null
    }
  }

  render () {
    return (
      <div className='Carousel_place_holder'><h1>Carousel Products Here</h1>
        <ProductCard rating={this.state.starRate}/>
      </div>
    )
  }

}

export default Carousel;