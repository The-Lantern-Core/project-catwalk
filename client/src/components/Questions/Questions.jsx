import React from 'react';
import Search from './components/Search.jsx';
import $ from 'jquery';
import AddQuestion from './Q-Modal/AddQuestion.jsx';
import { Token } from '/config.js';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      showModal: false
    };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  // componentDidMount() {
  //   this.getQuestions(19089);
  //   this.setState({isLoaded: false})
  //   console.log(this.props.questions)
  // }

  componentDidUpdate(oldProps) {
    if (JSON.stringify(this.props.questions) !== JSON.stringify(oldProps.questions)) {
      this.setState({
        isLoaded: true
      })
    }
  }

  // getQuestions(id) {
  //   $.get({
  //     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/`,
  //     headers: {Authorization: Token},
  //     data: {
  //       'product_id': id
  //     },
  //     datatype: 'json',
  //     success: (data) => {
  //       this.setState({
  //         questions: data.results,
  //         isLoaded: true
  //       })
  //     }
  //   })
  // }

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



  render() {
    const {isLoaded} = this.state;
    if (!isLoaded) {
      return <div>
        is loading...
      </div>
    } else {
    return (
      <div>
        <h3>Questions and Answers</h3>

        <Search questions={this.props.questions}/>

        <div><button className='btn btn-questions btn-more-questions'>MORE ANSWERED QUESTIONS</button>
        <button onClick={() => {this.showModal()}} className='btn btn-questions btn-add-a-question'>ADD A QUESTION +</button></div>


        <div>
          <AddQuestion
          show={this.state.showModal}
          closeModal={this.closeModal}
          productId={this.props.productId}/>
        </div>
      </div>
    )
    }
  }

}

export default Questions;