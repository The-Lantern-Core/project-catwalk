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
      productStyles: [],
      currentStyle: null
    }
    this.getProductStyle = this.getProductStyle.bind(this);
    this.getProductDetails = this.getProductDetails.bind(this);
  }

  componentDidUpdate(oldProps) {
    if(this.props.product !== oldProps.product) {
      // this.setState({currentProduct: this.props.product})
      this.getProductStyle()
      this.getProductDetails()
    }
  }

  getProductStyle() {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.props.product.id}/styles`,
      headers: {Authorization: Token},
      success: (data) => {
        this.setState({productStyles: data})
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getProductDetails() {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.props.product.id}`,
      headers: {Authorization: Token},
      success: (data) => {
        this.setState({currentProduct: data})
      },
      error: (err) => {
        console.log(err)
      }
    })
  }



  render() {
    if (!this.state.currentProduct) {
      return <div></div>
    }
    const { name, category, slogan, description } = this.state.currentProduct;
    return (
      <div className="Overview">
        <div className="image_gallery">
          <Gallery />
        </div>
        <div>Rating goes here!</div>
        <h3 className="category">{category}</h3>
        <h1 className="product_name">{name}</h1>
        <div className="style_cart">
          <Style />
        </div>
        <h4 className="slogan">{slogan}</h4>
        <div className="description">{description}</div>
      </div>
    )
  }
}

export default Overview;