import React from 'react';
import $ from 'jquery';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    }

    this.getAnswers = this.getAnswers.bind(this);
  }

  componentDidMount() {
    this.getAnswers();
  }

  getAnswers() {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.state.currentProduct.id}/qa/questions/${this.props.questionId}/answers`,
      headers: {Authorization: Token},
      dataType: 'json',
      contentType: 'application/json',
      success: (data) => {
        this.setState({ answers: data })
      },
      error: (error) => { console.log('here is an error for answers', error) }
    })
  }

  render() {
    return (
      <div className="default-Answer">
        A: {answers[0].results.body}
        <div>
              Helpful? <span>Yes</span> <span>Report</span>
        </div>
      </div>
    )
  }
}

export default Answer