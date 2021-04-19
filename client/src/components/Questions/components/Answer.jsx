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
    this.loadMoreAnswers = this.loadMoreAnswers.bind(this);
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

  loadMoreAnswers() {
    var elem = document.getElementById('loadMoreAnswersLink')


    if (elem.innerHTML === 'Load More Answers') {
      elem.innerHTML = 'Hide Answers';
      this.state.answers.slice(2, this.state.answers.length).forEach(answer => {
        document.getElementById('second-default-answer').innerHTML += `<div class='extraAnswers'>A: ${answer.body}<br /> <span>by ${answer.answerer_name}</span> <span>Helpful? </span> <u>Yes</u> (${answer.helpfulness}) <u>Report</u> </div>`
      });
    } else {
      elem.innerHTML = 'Load More Answers';
      var toDelete = document.getElementsByClassName('extraAnswers')
      while (toDelete.length > 0) {
        toDelete[0].remove();
      }
    }

  }


  render() {
    const {answers, isLoaded, loadAnswers} = this.state;

    if (!isLoaded) {
      return <div>
        is Loading...
      </div>
    } else {
    return (
      <div id='answerList' className='answers'>
        {(this.state.answers[0]) ? <div className='answer'><span className='answer-text'>A:{this.state.answers[0].body}</span> <br/> <span>by {this.state.answers[0].answerer_name}</span> <span>Helpful?</span> <u>Yes</u> ({this.state.answers[0].helpfulness}) <u>Report</u> </div>: ''}
        {(this.state.answers[1]) ? <div id='second-default-answer' className='answer'><span className='answer-text'>A:{this.state.answers[1].body}</span> <br/> <span>by {this.state.answers[1].answerer_name}</span><span>Helpful?</span> <u>Yes</u> ({this.state.answers[1].helpfulness}) <u>Report</u> </div>: ''}

      <div>{(answers.length > 2) ? <b id='loadMoreAnswersLink' onClick={this.loadMoreAnswers}>Load More Answers</b> : ''}</div>
      </div>

    )}


  }
}

export default Answer