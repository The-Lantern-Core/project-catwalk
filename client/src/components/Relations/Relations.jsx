import React from 'react';
import ProductCard from './ProductCard/ProductCard.jsx'
import Carousel from './Carousel/Carousel.jsx'
import Related from './Related/Related.jsx'
import MyOutfit from './MyOutfit/MyOutfit.jsx'
import Style from '../Overview/Style/Style.jsx';
// import StarRating from '../.starRating.jsx'

class Relations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starRate: null
    }
    //console.log('relations', props);
  }

  render () {
    return (
      <div className='relations_container'>
        <div className='related-wrapper'>
          <Related/>
        </div>
        <div className='myoutfit-wrapper'>
          <MyOutfit/>
        </div>
      </div>
    )
  }
}

export default Relations;