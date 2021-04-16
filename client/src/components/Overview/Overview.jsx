import React from 'react';
import $ from 'jquery';
import Gallery from './Image-Gallery/Gallery.jsx';
import Style from './Style/Style.jsx';
import { Token } from '/config.js';


class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProduct: null,
      productStyles: null,
      currentStyle: null,
      defaultPrice: null,
      salePrice: null,
      onSale: false
    }
    this.getDefaultStyle = this.getDefaultStyle.bind(this);
  }

  componentDidUpdate(oldProps) {
    if(this.props.product !== oldProps.product) {
      this.setState({currentProduct: this.props.product});
    }
    if (this.props.styles !== oldProps.styles) {
      this.setState({productStyles: this.props.styles});
    }
  }

  getDefaultStyle(styles) {
    styles.forEach((style) => {
      if (style['default?'] === true) {
        this.setState({currentStyle: style})
        if (!style.sale_price) {
          this.setState({defaultPrice: style.original_price})
        } else {
          this.setState({salePrice: style.sale_price})
          this.setState({onSale: true})
        }
        console.log(style.sale_price)
      }
    })
  }





  render() {
    if (!this.state.currentProduct || !this.state.productStyles) {
      return <div></div>
    }
    const getDefaultStyle = this.getDefaultStyle;
    const { name, category, slogan, description, features } = this.state.currentProduct;
    return (
      <div className="Overview">
        <div className="image_gallery">
          <Gallery style={this.state.currentStyle}/>
        </div>
        <div>Rating goes here!</div>
        <h3 className="category">{category}</h3>
        <h1 className="product_name">{name}</h1>
        <div>{this.state.currentProduct.default_price}</div>
        <div className="style_cart">
          <Style
            styles={this.state.productStyles.results}
            getDefaultStyle={getDefaultStyle}
            currentStyle={this.state.currentStyle}/>
        </div>
        <h4 className="slogan">{slogan}</h4>
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
    )
  }
}

export default Overview;