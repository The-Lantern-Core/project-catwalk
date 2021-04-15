import React from 'react';

class Reviews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  updateProductId(productId) {
    this.setState({
      productId: productId
    });
  }

  render() {
    return (<div>
      NANI
      </div>);
  }
}

export default Reviews;