import React from 'react';
import $ from 'jquery';
import { Token } from '../../../config.js';
import Reviews from './Reviews/Reviews.jsx';
import Overview from './Overview/Overview.jsx';
import Questions from './Questions/Questions.jsx';
// import Relations from './Relations/Relations.jsx';
import Header from './Header/Header.jsx';
import { WidgetProvider } from './WidgetContext.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allProducts: null,
      product: null,
      productStyles: null,
      productId: null,
      questions: null,
      reviewMeta: null,
      averageReview: null
    };
    this.getProducts = this.getProducts.bind(this);
    this.getProductDetails = this.getProductDetails.bind(this);
    this.getProductStyle = this.getProductStyle.bind(this);
    this.updateProductId = this.updateProductId.bind(this);
    this.getReviewMeta = this.getReviewMeta.bind(this);
    this.getAverageReview = this.getAverageReview.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    $.get({
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products',
      headers: { Authorization: Token },
      success: (data) => {
        this.setState({ allProducts: data })
        this.getProductDetails(data[0].id)
        this.getProductStyle(data[0].id)
        this.updateProductId(data[0].id)
        this.getReviewMeta(data[0].id)
        this.getQuestions(data[0].id)
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getProductDetails(id) {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`,
      headers: { Authorization: Token },
      success: (data) => {
        this.setState({ product: data })
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getProductStyle(id) {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`,
      headers: { Authorization: Token },
      success: (data) => {
        this.setState({ productStyles: data })
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

  getQuestions(id) {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/`,
      headers: {Authorization: Token},
      data: {'product_id': id},
      datatype: 'json',
      success: (data) => {
        this.setState({questions: data.results})
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getReviewMeta(productId) {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta`,
      headers: { Authorization: Token },
      data: { 'product_id': productId },
      success: (data) => {
        this.setState({ reviewMeta: data })
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
      averageReview: (combinedReviews / totalReviews) || 0
    });
  }

  render() {
    return (
        <div className='app'>

          <Header />

          {/* overview */}
          <WidgetProvider widget='product overview'>
            <Overview
              product={this.state.product}
              styles={this.state.productStyles}
              average={this.state.averageReview} />
          </WidgetProvider>


          {/* related */}
          {/* <div className='relations-container' style={{ maxWidth: 1800, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <Relations
              product={this.state.product}
              styles={this.state.productStyles}/>
          </div> */}

          {/* question */}
          <Questions productId={this.state.productId} questions={this.state.questions}/>

        {/* reviews */}
        <WidgetProvider widget='rating and reviews'>
          <Reviews productId={this.state.productId} reviewMeta={this.state.reviewMeta}
            average={this.state.averageReview} product={this.state.product}
            getReviewMeta={this.getReviewMeta} />
        </WidgetProvider>
      </div>
    );
  }
}

export default App;