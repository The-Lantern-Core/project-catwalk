import React from 'react';
import $ from 'jquery';
import AHelpfulness from '../components/AHelpfulness.jsx';
import moment from 'moment';
import { Token } from '../../../../../config.js';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      isLoaded: false,
      loadAnswers: false,
      clickLoaded: false,
    }

    this.getAnswers = this.getAnswers.bind(this);
    this.handleClickHideOrLoad = this.handleClickHideOrLoad.bind(this);
    // this.loadMoreAnswers = this.loadMoreAnswers.bind(this);
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

  handleClickHideOrLoad() {
    this.setState({clickLoaded: !this.state.clickLoaded})
  }

  // loadMoreAnswers() {
  //   var elem = document.getElementById('loadMoreAnswersLink')


  //   if (elem.innerHTML === 'Load More Answers') {
  //     elem.innerHTML = 'Hide Answers';
  //     this.state.answers.slice(2, this.state.answers.length).forEach(answer => {
  //       document.getElementById('second-default-answer').innerHTML += `<div class='extraAnswers'>A: ${answer.body}<br /> <span>by ${answer.answerer_name}</span> <${AHelpfulness}/> </div>`
  //     });
  //   } else {
  //     elem.innerHTML = 'Load More Answers';
  //     var toDelete = document.getElementsByClassName('extraAnswers')
  //     while (toDelete.length > 0) {
  //       toDelete[0].remove();
  //     }
  //   }

  // }


  render() {
    const {answers, isLoaded, loadAnswers, clickLoaded} = this.state;

    if (!isLoaded) {
      return <div data-testid='not-rendered'>
        is Loading...
      </div>
    } else if (isLoaded && !clickLoaded) {
    return (
      // default display two answers for each question
    <div>
      <div>
        {answers.slice(0, 2).map((answer, index) =>
          <div className='answers'key={index}>
            A: {answer.body} <br/>
            <span className='answerer-info'>
              by {answer.answerer_name}, {moment(answer.date).format("MMMM Do, YYYY")} <AHelpfulness answer={answers[index]}/>
            </span>

          </div>

        )}

      {/* render 'load more questions' button if there are more answers */}
      <div>{(answers.length > 2) ? <b id='loadMoreAnswersLink' onClick={this.handleClickHideOrLoad}>Load More Answers</b> : ''}</div>
      </div>
    </div>

    )} else if (isLoaded && clickLoaded) {
      (
        // default display two answers for each question
      <div>
        <div>
          {answers.slice(0, answers.length).map((answer, index) =>
            <div className='answers'key={index}>
              A: {answer.body} <br/>
              <span className='answerer-info'>
                by {answer.answerer_name}, {moment(answer.date).format("MMMM Do, YYYY")} <AHelpfulness answer={answers[index]}/>
              </span>

            </div>

          )}

        {/* render 'load more questions' button if there are more answers */}
        <div>{(answers.length > 2) ? <b id='loadMoreAnswersLink' onClick={this.handleClickHideOrLoad}>Hide Answers</b> : ''}</div>
        </div>
      </div>

      )
    }


  }
}

export default Answer