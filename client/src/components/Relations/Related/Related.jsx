import React from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx'
import Carousel from '../Carousel/Carousel.jsx'

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null,
      productStyles: null,
      currentStyle: null,
      starRate: null
    }
    console.log('Inside Related', props);
    this.getDefaultStyle = this.getDefaultStyle.bind(this);
  }

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

  render () {
    return (
      <div className='component-wrapper'><h3>Related Products</h3>
        <Carousel>
          <ProductCard styletype={this.props.style} style={{ marginRight: '16px'}}/>

          <img src="https://via.placeholder.com/300X500" alt="placeholder" style={{ marginRight: '16px'}}/>
          <img src="https://via.placeholder.com/300X500" alt="placeholder" style={{ marginRight: '16px'}}/>
          <img src="https://via.placeholder.com/300X500" alt="placeholder" style={{ marginRight: '16px'}}/>
          <img src="https://via.placeholder.com/300X500" alt="placeholder" style={{ marginRight: '16px'}}/>
          <img src="https://via.placeholder.com/300X500" alt="placeholder" style={{ marginRight: '16px'}}/>
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