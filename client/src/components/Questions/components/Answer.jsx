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

  render() {
    const {answers, isLoaded, loadAnswers, clickLoaded} = this.state;

    if (!isLoaded) {
      return <div data-testid='not-rendered'>
        is Loading...
      </div>
    } else if (isLoaded && !clickLoaded) {
      return (
        // default display two answers for each question
        <div className='answers-list'>
          <div className='answer-individual'>
            {answers.slice(0, 2).map((answer, index) =>
              <div className='answers'key={index}>
                <b className='answers-individual-a'>A: </b>
                <div className='answers-individual-text'>
                  {answer.body}
                  <div className='answerer-info'>
                    by {answer.answerer_name},&nbsp;
                    {moment(answer.date).format("MMMM Do, YYYY")}
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <AHelpfulness answer={answers[index]}/>
                  </div>
                </div>
              </div>

            )}

          {/* render 'load more questions' button if there are more answers */}
          <div className='answers-more'>{(answers.length > 2)
          ? <b id='loadMoreAnswersLink' onClick={this.handleClickHideOrLoad}>LOAD MORE ANSWERS</b>
          : ''}</div>
          </div>
        </div>
      )
    } else if (isLoaded && clickLoaded) {
      return (
        // default display two answers for each question
        <div className='answers-list'>
          <div className='answer-individual'>
            {answers.slice(0, answers.length).map((answer, index) =>
              <div className='answers'key={index}>
                <b className='answers-individual-a'>A: </b>
                <div className='answers-individual-text'>
                  {answer.body}
                  <div className='answerer-info'>
                    by {answer.answerer_name}, {moment(answer.date).format("MMMM Do, YYYY")}
                    <AHelpfulness answer={answers[index]}/>
                  </div>
                </div>

              </div>

            )}

          {/* render 'Hide' button if there are more answers */}
          <div className='answers-more'>
            {(answers.length > 2)
            ? <b id='loadMoreAnswersLink' onClick={this.handleClickHideOrLoad}>HIDE ANSWERS</b>
            : ''}</div>
          </div>
        </div>

      )
    }


  }
}

export default Answer