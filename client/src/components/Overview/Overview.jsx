import React from 'react';
import $ from 'jquery';
import Gallery from './Image-Gallery/Gallery.jsx';
import Style from './Style/Style.jsx';
import { Token } from '/config.js';


class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProduct: {id: 19089},
      productStyles: []
    }
    this.getProductStyle = this.getProductStyle.bind(this);
  }

  componentDidMount() {
    this.setState({currentProduct: this.props.product});
    this.getProductStyle();
  }

  getProductStyle() {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.state.currentProduct.id}/styles`,
      headers: {Authorization: Token},
      success: (data) => {
        this.setState({productStyles: data})
      }
    })
  }

  render() {
    return (
      <div className="Overview">
        <div className="image_gallery">
          <Gallery />
        </div>
        <div>Rating goes here!</div>
        <h3>Category goes Here!</h3>
        <h1>Name goes here!</h1>
        <div className="style_cart">
          <Style />
        </div>
      </div>
    )
  }
}

export default Overview;