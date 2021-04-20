import React from 'react';
import $ from 'jquery';
import { Token } from '/config.js';

class QHelpfulness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
    this.updateHelpful = this.updateHelpful.bind(this);
  }

  updateHelpful() {
    this.setState({
      selected: true
    })

    $.ajax({
      type: 'PUT',
      headers: {Authorization: Token},
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${this.props.question.question_id}/helpful`
    })
  }

  render() {
    if (!this.state.selected) {
      return (
        <div>
          Helpful? <u onClick={this.updateHelpful}>Yes</u> ({this.props.question.question_helpfulness}) | <u>Add Answer</u>
        </div>
      )
    } else {
      return (
        <div>
          Helpful ({this.props.question.question_helpfulness + 1}) | <u>Add Answer</u>
        </div>
      )
    }
  }


}

export default QHelpfulness;