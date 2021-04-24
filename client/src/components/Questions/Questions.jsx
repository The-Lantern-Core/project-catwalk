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
      return <div data-testid='not-rendered'>
        is loading...
      </div>
    } else {
    return (
      <div>
        <h3 id='q-a-header'>Questions and Answers</h3>

        <Search questions={this.props.questions} name={this.props.product.name}/>

        <div><button className='btn btn-questions btn-more-questions'>MORE ANSWERED QUESTIONS</button>
        <button onClick={() => {this.showModal()}} className='btn btn-questions btn-add-a-question'>ADD A QUESTION +</button></div>


        <div>
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