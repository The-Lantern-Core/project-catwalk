import React from 'react';
import Reviews from './reviews/reviews.jsx'
import Overview from './Overview/Overview.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productId: 19089
    };
    this.updateProductId = this.updateProductId.bind(this);
  }

  updateProductId(productId) {
    this.setState({
      productId: productId
    });
  }

  render() {
    return (<div>
      JOSEPH WAS HERE
      {/* overview */}
      <Overview product={this.state.productId}/>
      Cordell too, but I don't have to be loud about it...
      {/* related */}

      {/* question */}
      question <br/>

      {/* reviews */}
      <Reviews />
      </div>);
  }
}

export default App;