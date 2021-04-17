import React from 'react';
import $ from 'jquery';
import { Token } from '/config.js';
import Reviews from './Reviews/Reviews.jsx';
import Overview from './Overview/Overview.jsx';
import Questions from './Questions/Questions.jsx';
import Related from './Relations/Related/Related.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allProducts: null,
      product: null,
      productStyles: null,
      productId: null,
      reviewMeta: null,
      averageReview: null
    };
    this.getProducts = this.getProducts.bind(this);
    this.getProductDetails = this.getProductDetails.bind(this);
    this.getProductStyle = this.getProductStyle.bind(this);
    this.updateProductId = this.updateProductId.bind(this);
    this.getReviewMeta = this.getReviewMeta.bind(this);
    this.getAverageReview = this.getAverageReview.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    $.get({
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products',
      headers: {Authorization: Token},
      success: (data) => {
        this.setState({allProducts: data})
        this.getProductDetails(data[0].id)
        this.getProductStyle(data[0].id)
        this.updateProductId(data[0].id)
        this.getReviewMeta(data[0].id)
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getProductDetails(id) {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`,
      headers: {Authorization: Token},
      success: (data) => {
        this.setState({product: data})
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getProductStyle(id) {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`,
      headers: {Authorization: Token},
      success: (data) => {
        this.setState({productStyles: data})
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  updateProductId(productId) {
    this.setState({
      productId: productId
    });
  }

  getReviewMeta(productId) {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta`,
      headers: {Authorization: Token},
      data: {'product_id': productId},
      success: (data) => {
        this.setState({reviewMeta: data})
        this.getAverageReview(data.ratings)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getAverageReview(reviews) {
    var totalReviews = 0;
    var combinedReviews = 0;
    for (var key in reviews) {
      totalReviews += parseInt(reviews[key]);
      combinedReviews += key * parseInt(reviews[key]);
    }

    this.setState({
      averageReview: (combinedReviews/totalReviews)
    });
  }

  render() {
    return (<div>
      {/* overview */}
      <Overview product={this.state.product} styles={this.state.productStyles}/>
      {/* related */}
      <Related product={this.state.product}/>
      {/* question */}
      <Questions productId={this.state.productId}/>
      {/* reviews */}
      <Reviews productId={this.state.productId} reviewMeta={this.state.reviewMeta} average={this.state.averageReview}/>
      </div>);
  }
}

export default App;