import React from 'react';
import $ from 'jquery';
import { Token } from '/config.js';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      isLoaded: false,
      loadAnswers: false
    }

    this.getAnswers = this.getAnswers.bind(this);
  }

  componentDidMount() {
    this.getAnswers()
  }

  getAnswers() {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${this.props.questionId}/answers/`,
      headers: {Authorization: Token},
      success: (data) => {
        this.setState({
          answers: data.results,
          isLoaded: true
        })
      }
    })
  }



  render() {
    const {answers, isLoaded, loadAnswers} = this.state;

    if (!isLoaded) {
      return <div>
        is Loading...
      </div>
    } else {
    return (
      <div>
        {(this.state.answers[0]) ? <div><span className='answer'>A:{this.state.answers[0].body}</span> <span>Helpful? {this.state.answers[0].helpfulness} </span> <span>Yes</span> <span>Report</span></div>: ''}
        {(this.state.answers[1]) ? <div><span className='answer'>A:{this.state.answers[1].body}</span> <span>Helpful? {this.state.answers[1].helpfulness} </span> <span>Yes</span> <span>Report</span></div>: ''}

      <div>{(answers.length > 2) ? <span>Load More Answers</span> : ''}</div>
      </div>

    )}


  }
}

export default Answer