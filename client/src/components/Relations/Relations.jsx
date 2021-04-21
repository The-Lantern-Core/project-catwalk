import React from 'react';
import ProductCard from './ProductCard/ProductCard.jsx';
import Carousel from './Carousel/Carousel.jsx';
import Related from './Related/Related.jsx';
import MyOutfit from './MyOutfit/MyOutfit.jsx';

import Style from '../Overview/Style/Style.jsx';
import Overview from '../Overview/Overview.jsx';
// import StarRating from '../.starRating.jsx'

class Relations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null,
      productStyles: null,
      currentStyle: null,
      defaultPrice: null,
      salePrice: null,
      starRate: null
    }
    //this.getDefaultStyle = this.getDefaultStyle.bind(this);
    console.log('relations', props);
  }
/*
  componentDidUpdate(oldProps) {
    if(this.props.product !== oldProps.product) {
      this.setState({currentProduct: this.props.product});
    }
    if (this.props.styles !== oldProps.styles) {
      this.setState({productStyles: this.props.styles});
    }
    if (this.props.average !== oldProps.average) {
      this.setState({starRate: this.props.average});
    }
  }

  getDefaultStyle(styles) {
    styles.forEach((style) => {
      if (style['default?'] === true) {
        this.setState({currentStyle: style})
        this.setState({defaultPrice: style.original_price})
        if (style.sale_price) {
          this.setState({salePrice: style.sale_price})
        }
      }
    })
  }
*/
  render () {
    return (
      <div className='relations_container'>
        <div className='related-wrapper'>
          <Related primary={this.props}/>
        </div>
        <div className='myoutfit-wrapper'>
          <MyOutfit/>
        </div>
      </div>
    )
  }
}

export default Relations;