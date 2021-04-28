import React from 'react';
import Search from './components/Search.jsx';
import $ from 'jquery';
import AddQuestion from './Q-Modal/AddQuestion.jsx';
import { Token } from '../../../../config.js';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      showModal: false,
      count: 2,
      displayedQuestions: [],
      moreQuestions: true
    };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.loadMoreQuestions = this.loadMoreQuestions.bind(this);
    this.updateQuestions = this.updateQuestions.bind(this);


  }


  componentDidUpdate(oldProps) {
    if (JSON.stringify(this.props.questions) !== JSON.stringify(oldProps.questions)) {
      this.setState({
        isLoaded: true,
        displayedQuestions: this.props.questions.slice(0, this.state.count)
      })
    }
  }

  updateQuestions() {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/`,
      headers: {Authorization: Token},
      data: {'product_id': data.product_id},
      datatype: 'json',
      success: (data) => {
        console.log('hi');
      }
    })
  }

  showModal() {
    this.setState({
      showModal: true
    });
    console.log(this.props.questions)
  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }

  loadMoreQuestions() {
    var twoMore = this.state.count + 2;
    this.setState({
      count: twoMore
    })
  }

  render() {
    const {isLoaded} = this.state;
    if (!isLoaded) {
      return <div data-testid='not-rendered'>
        Loading...
      </div>
    } else {
      return (
        <div id='questions-answers' className='questions-widget'>
          <div id='q-a-header'>Questions and Answers</div>

          <Search
          questions={this.props.questions}
          name={this.props.product.name}
          count={this.state.count}
          displayedQuestions={this.state.displayedQuestions}/>


          <div className='question-buttons'>
            <button onClick={this.loadMoreQuestions} className='btn btn-questions btn-more-questions'>
              MORE ANSWERED QUESTIONS</button>
            <button onClick={() => {this.showModal()}} className='btn btn-questions btn-add-a-question'>
              ADD A QUESTION +</button>
          </div>


          <div className='questions-add'>
            <AddQuestion
            show={this.state.showModal}
            closeModal={this.closeModal}
            productId={this.props.productId}
            name={this.props.product.name}/>
          </div>
        </div>
      )
    }
  }

}

export default Questions;