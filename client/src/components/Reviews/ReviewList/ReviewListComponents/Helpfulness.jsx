import React from 'react';
import $ from 'jquery';
import { Token } from '/config.js';

class Helpfulness extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      reported: false
    };
    this.updateHelpful = this.updateHelpful.bind(this);
    this.updateReport = this.updateReport.bind(this);
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

  updateReport() {
    this.setState({
      reported: true
    });
    $.ajax({
      type: 'PUT',
      headers: {Authorization: Token},
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${this.props.review.review_id}/report`
    })
  }

  reportedState() {
    if (!this.state.reported) {
      return (
        <u className='review-tile-report-false' onClick={this.updateReport}>Report</u>
      )
    } else {
      return (<u className='review-tile-report-true'>Reported</u>);
    }

  }

  render() {
    if (!this.state.selected) {
      return (<div className='review-tile-helpfulness-false review-tile-element'
        style={{
          'fontSize': '90%',
          'color': 'gray'
        }}>
          Helpful?&nbsp;
          <u className='review-helpful-yes' onClick={this.updateHelpful}>Yes</u>&nbsp;
          ({this.props.review.helpfulness}) |&nbsp;
        {this.reportedState()}
      </div>);
    } else {
      return (<div
        className='review-tile-helpfulness-true review-tile-element'
        style={{
          'fontSize': '90%',
          'color': 'gray'
        }}>
          Helpful ({this.props.review.helpfulness + 1}) | {this.reportedState()}
      </div>);
    }

  }
}

export default Helpfulness;