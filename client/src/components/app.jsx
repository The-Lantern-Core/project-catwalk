import React from 'react';
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
      overview <br/>
      Cordell too, but I don't have to be loud about it...
      {/* related */}
      related <br/>

      {/* question */}
      question <br/>

      {/* reviews */}
      reviews <br/>
      </div>);
  }
}

export default App;