import React from 'react';
import Search from './components/Search.jsx';
import $ from 'jquery';
import { Token } from '/config.js';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: this.props.product,
      isLoaded: false,
      questions: []
    };

    this.getQuestions = this.getQuestions.bind(this);

  }

  componentDidMount() {
    // Get Request to the Questions API server
    // getQuestions(function(data) {
    //   // this.setState({
    //   //   questions: data.results
    //   // })
    // })
    this.getQuestions();
  }

  getQuestions() {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=19092`,
      headers: {Authorization: Token},
      success: (data) => {
        this.setState({
          questions: data.results,
          isLoaded: true
        })
      }
    })
  }



  render() {
    const {currentProduct, isLoaded, questions} = this.state;
    if (!isLoaded) {
      return <div>
        is loading...
      </div>
    } else {
    return (
      <div>
        <h3>Questions and Answers</h3>

        <Search questions={this.state.questions}/>

        <div><button className='btn btn-questions btn-more-questions'>MORE ANSWERED QUESTIONS</button> <button className='btn btn-questions btn-add-a-question'>ADD A QUESTION +</button></div>
      </div>

    )
    }
  }

}

export default Questions;