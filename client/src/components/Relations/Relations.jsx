import React from 'react';
import ProductCard from './ProductCard/ProductCard.jsx'
import Carousel from './Carousel/Carousel.jsx'
import Style from '../Overview/Style/Style.jsx';
// import StarRating from '../.starRating.jsx'

class Relations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starRate: null
    }
    console.log('relations', props);
  }




  render () {
    return (
      <div className='Relations_place_holder'><h2>Related Products</h2>
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

export default Relations;