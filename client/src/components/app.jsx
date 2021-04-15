import React from 'react';
import Overview from './Overview/Overview.jsx'
import Related from './Related/Related.jsx'

import Reviews from './Reviews/Reviews.jsx'

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
      {/* overview */}
      <Overview />

      {/* related */}
      <Related />

      {/* question */}
      {/* <Questions /> */}

      {/* reviews */}
      <Reviews />
      </div>);
  }
}

export default App;