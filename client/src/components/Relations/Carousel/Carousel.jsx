import React from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx'
import StarRating from '../../starRating.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starRate: null,
      children: props
    }
  }



  render () {
    return (
      /*
      <div className='Carousel_place_holder'><h1>Carousel Products Here</h1>
      <ProductCard rating={this.state.starRate}/>
      </div>
      */

     //<ProductCard rating={this.state.starRate}/>

     <div className='carousel-container'>
       <div className='carousel-wrapper'>
         <div className='carousel-content-wrapper'>
            <div className='carousel-content'>
              <button className='left-arrow'>&lt;</button>
              {this.props.children}
              <button className='right-arrow'>&gt;</button>
            </div>
         </div>
       </div>
     </div>
    )
  }

}

export default Carousel;