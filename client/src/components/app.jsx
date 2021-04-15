import React from 'react';
import Reviews from './reviews/reviews.jsx'
import Overview from './Overview'

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
      <Overview />
      Cordell too, but I don't have to be loud about it...
      {/* related */}
      <Related />
      {/* question */}
      <Questions />

      {/* reviews */}
      <Reviews />
      </div>);
  }
}

export default App;