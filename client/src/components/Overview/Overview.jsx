import React from 'react';
import $ from 'jquery';
import Gallery from './Image-Gallery/Gallery.jsx';
import Style from './Style/Style.jsx';
import StarRating from '../starRating.jsx';
import Price from './Style/Price.jsx';
import { Token } from '/config.js';


class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProduct: null,
      productStyles: null,
      currentStyle: {name: ""},
      defaultPrice: null,
      salePrice: null,
      starRate: null,
    }
    this.getDefaultStyle = this.getDefaultStyle.bind(this);
    this.onThumbnailClick = this.onThumbnailClick.bind(this);
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

  onThumbnailClick(val) {
    this.state.productStyles.results.forEach((style) =>{
      if (style.name === val) {
        this.setState({currentStyle: style})
        this.setState({defaultPrice: style.original_price})
        if (style.sale_price) {
          this.setState({salePrice: style.sale_price})
        } else {
          this.setState({salePrice: null})
        }
      }
    })
  }



  render() {
    if (!this.state.currentProduct || !this.state.productStyles || !this.state.starRate) {
      return <div className="Overview"></div>
    }
    const getDefaultStyle = this.getDefaultStyle;
    const { name, category, slogan, description, features } = this.state.currentProduct;
    return (
      <div className="Overview">
        <div className="image-style-container">

          <div className="image_gallery">
            <Gallery style={this.state.currentStyle}/>
          </div>

          <div className="product-style-and-cart">
            <StarRating rating={this.state.starRate}/>
            <h3 className="category">{category}</h3>
            <h1 className="product_name">{name}</h1>
            <Price standard={this.state.defaultPrice} sale={this.state.salePrice}/>
            <h3 className="style-name">Style >>> {this.state.currentStyle.name}</h3>
            <div className="style_cart">
              <Style
                styles={this.state.productStyles.results}
                getDefaultStyle={getDefaultStyle}
                currentStyle={this.state.currentStyle}
                onThumbnailClick={this.onThumbnailClick}/>
          </div>

        </div>

        </div>
        <h4 className="slogan">{slogan}</h4>
        <div className="product-info">
          <div className="description">{description}</div>
          <div className="feature_list">
            {
              features.map((feature) => {
                return <div key={feature.feature} className="feature">
                         {feature.feature}: {feature.value}
                       </div>
              })
            }
          </div>
        </div>

      </div>
    )
  }
}

export default Overview;