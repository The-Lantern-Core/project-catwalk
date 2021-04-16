import React from 'react';
import Search from './components/Search.jsx';
import $ from 'jquery';
import {Token} from '/config.js';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {id: this.props.productId},
      questions: []
    };

    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    // Get Request to the Questions API server
    this.getQuestions();
    console.log(this.state.questions);
  }

  getQuestions() {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.state.currentProduct.id}/qa/questions`,
      headers: {Authorization: Token},
      dataType: 'json',
      contentType: 'application/json',
      success: (data) => {
        this.setState({ questions: data })
      },
      error: (error) => { console.log('here is an error', error) }
    })
  }



  render() {
    return (
      <div>
        <h3>Questions and Answers</h3>

        <Search questions={this.state.questions}/>
      </div>
    )
  }

}

export default Questions;