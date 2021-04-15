import React from 'react';
<<<<<<< HEAD
import Reviews from './reviews/reviews.jsx'
=======
import Overview from './Overview'
>>>>>>> 5a6585ac5a9309bd9c7f4dd05777b77fa7925aaa

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
      overview <br/>
      Cordell too, but I don't have to be loud about it...
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