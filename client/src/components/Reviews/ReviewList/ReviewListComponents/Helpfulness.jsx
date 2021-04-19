import React from 'react';
import $ from 'jquery';
import { Token } from '/config.js';

class Helpfulness extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    this.updateHelpful = this.updateHelpful.bind(this);
  }

  updateHelpful() {
    this.setState({
      selected: true
    });

    $.ajax({
      type: 'PUT',
      headers: {Authorization: Token},
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${this.props.review.review_id}/helpful`
    })
  }

  render() {
    if (!this.state.selected) {
      return (<div
        className='review-tile-helpfulness review-tile-element'
        style={{
          'fontSize': '90%',
          'color': 'gray'
        }}>
          Helpful?&nbsp;
          <u className='review-helpful-yes' onClick={this.updateHelpful}>Yes</u>&nbsp;
          ({this.props.review.helpfulness}) | <u>Report</u>
      </div>);
    } else {
      return (<div
        className='review-tile-helpfulness review-tile-element'
        style={{
          'fontSize': '90%',
          'color': 'gray'
        }}>
          Helpful ({this.props.review.helpfulness + 1}) | <u>Report</u>
      </div>);
    }

  }
}

export default Helpfulness;