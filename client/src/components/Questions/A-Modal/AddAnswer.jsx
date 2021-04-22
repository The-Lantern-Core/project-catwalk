import React from 'react';
import Modal from 'react-modal';
import AnswerInput from '../A-Modal/AnswerInput.jsx';
import AuthFields from '../Q-Modal/AuthFields.jsx'
import $ from 'jquery';
import { Token } from '../../../../../config.js'


if (process.env.NODE_ENV !== 'test')  Modal.setAppElement('#app');



class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      email: '',
      validEmail: true,
      photos: [],
      empty: false
    }
    this.resetModal = this.resetModal.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleNickname = this.handleNickname.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  resetModal() {
    this.props.closeModal();
    this.setState({
      answer: '',
      nickname: '',
      email: '',
      validEmail: true,
      photos: [],
      empty: false
    })
  }

  handleAnswer(e) {
    this.setState({
      answer: e.target.value
    })
  }

  handleNickname(e) {
    this.setState({
      nickname: e.target.value
    })
  }

  handleEmail(e) {
    var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(e.target.value.match(mailformat)) {
      this.setState({
        email: e.target.value,
        validEmail: true
      })
    } else {
      this.setState({
        email: '',
        validEmail: false
      })
    }
  }

  submitForm(e) {
    e.preventDefault();
    var data = {
      body: this.state.answer,
      name: this.state.nickname,
      email: this.state.email,
      photos: this.state.photos
    }

    var emptyFields = [];
    if (data.body === '') {
      emptyFields.push('Question')
    }
    if (data.name === '') {
      emptyFields.push('Nickname')
    }
    if (data.email === '') {
      emptyFields.push('Email')
    }

    if (emptyFields.length) {
      this.setState({
        empty: true
      })
    } else {
      console.log(data)
      $.ajax({
        'type': 'POST',
        'headers': {Authorization: Token},
        'url': `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${this.props.questionId}/answers`,
        'data': JSON.stringify(data),
        'contentType': 'application/json',
        'success': () => {this.resetModal();},
        'error': (err) => {console.log(err);}
      })
    }
  }



  render() {
    return (
      <Modal
        isOpen={this.props.showModal}
        onRequestClose={this.resetModal}
        >
        <button onClick={this.resetModal}>X</button>

        <div>
          <AnswerInput handleAnswer={this.handleAnswer}/> <br/>
          <span>Upload Pictures</span> <button>Upload</button> <br/>
          <AuthFields handleNickname={this.handleNickname} handleEmail={this.handleEmail} validEmail={this.state.validEmail}/> <br/>
          <button onClick={this.submitForm}>Submit</button>
        </div>

      </Modal>
    )
  }



}

export default AddAnswer;