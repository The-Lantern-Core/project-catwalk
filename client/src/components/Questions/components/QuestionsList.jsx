import React from 'react';
import Answer from '../components/Answer.jsx';
import QHelpfulness from '../components/QHelpfulness.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions,
      filteredQuestions: this.props.filteredQuestions,
      filtered: this.props.filtered
    }
  }



  render() {
    if (!this.state.filtered) {
      return (
        // map out 2 individual questions from props.state.data
        <div>
          {this.state.questions.slice(0, 2).map((question, index) =>
            <div className="default-Answer" key={index}>
              <b>Q: {this.state.questions[index].question_body}</b>
              <QHelpfulness question={this.state.questions[index]} />

              <Answer questionId={this.state.questions[index].question_id} key={index}/>
            </div>
          )}


        </div>
      )
    } else {
      return (
        <div>
          {this.state.filteredQuestions.slice(0, 2).map((question, index) =>
            <div className="default-Answer" key={index}>
              <b>Q: {this.state.filteredQuestions[index].question_body}</b>
              <QHelpfulness question={this.state.filteredQuestions[index]} />

              <Answer questionId={this.state.filterQuestions[index].question_id} key={index}/>
            </div>
          )}


        </div>
      )
    }
  }

}

export default QuestionsList;