import React from 'react';

class Helpfulness extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (<div
      className='review-tile-helpfulness review-tile-element'
      style={{
        'fontSize': '90%',
        'color': 'gray'
      }}>
      Helpful? <u>Yes</u> ({this.props.value}) | <u>Report</u>
      </div>);
  }
}

export default Helpfulness;