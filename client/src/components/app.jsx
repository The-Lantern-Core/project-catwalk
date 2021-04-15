import React from 'react';
import Reviews from './reviews/reviews.jsx'

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
      overview <br/>

      {/* related */}
      related <br/>

      {/* question */}
      question <br/>

      {/* reviews */}
      <Reviews />
      </div>);
  }
}

export default App;