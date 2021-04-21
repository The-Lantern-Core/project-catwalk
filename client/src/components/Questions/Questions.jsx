import React from 'react';
import Search from './components/Search.jsx';
import $ from 'jquery';
import AddQuestion from './Q-Modal/AddQuestion.jsx';
import { Token } from '/config.js';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      isLoaded: false,
      questions: [],
      showModal: false
    };

    this.getQuestions = this.getQuestions.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=19089`,
      headers: {Authorization: Token},
      success: (data) => {
        this.setState({
          questions: data.results,
          isLoaded: true
        })
      }
    })
  }

  showModal() {
    this.setState({
      showModal: true
    });
  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }



  render() {
    const {productId, isLoaded, questions} = this.state;
    if (!isLoaded) {
      return <div>
        is loading...
      </div>
    } else {
    return (
      <div>
        <h3>Questions and Answers</h3>

        <Search questions={this.state.questions}/>

        <div><button className='btn btn-questions btn-more-questions'>MORE ANSWERED QUESTIONS</button>
        <button onClick={() => {this.showModal()}} className='btn btn-questions btn-add-a-question'>ADD A QUESTION +</button></div>


        <div>
          <AddQuestion
          show={this.state.showModal}
          closeModal={this.closeModal}
          productId={this.state.productId}/>
        </div>
      </div>
    )
    }
  }

}

export default Questions;