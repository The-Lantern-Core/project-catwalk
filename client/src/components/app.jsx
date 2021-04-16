import React from 'react';
import $ from 'jquery';
import { Token } from '/config.js';
import Reviews from './Reviews/Reviews.jsx';
import Overview from './Overview/Overview.jsx';
import Questions from './Questions/Questions.jsx';
import Related from './Related/Related.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      product: null
    };
    this.getProducts = this.getProducts.bind(this);
    this.updateProductId = this.updateProductId.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    $.get({
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products',
      headers: {Authorization: Token},
      success: (data) => {
        this.setState({allProducts: data});
        this.setState({product: data[0]});
      }
    });
  }

  updateProductId(productId) {
    this.setState({
      productId: productId
    });
  }

  render() {
    return (<div>
      {/* overview */}
      <Overview product={this.state.product}/>
      {/* related */}
      <Related product={this.state.product}/>
      {/* question */}
      <Questions productId={this.state.productId}/>

      {/* reviews */}
      <Reviews />
      </div>);
  }
}

export default App;