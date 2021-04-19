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
      <div className='Relations_place_holder'><h1>Relations Products Here</h1>
        <Carousel rating={this.state.starRate}/>
      </div>
    )
  }
}

export default Relations;