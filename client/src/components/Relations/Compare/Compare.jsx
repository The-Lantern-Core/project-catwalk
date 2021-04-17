import React from 'react';

// To include modal
class Compare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: ''
    };
    console.log('blog1', this.props.product_id);
  }
  render () {
    return (
      <div className='so it does'></div>
    )
  }
}

export default Compare;