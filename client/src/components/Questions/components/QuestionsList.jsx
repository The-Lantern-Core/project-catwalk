import React from 'react';
import Answer from '../components/Answer.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions
    }
  }

  componentDidMount() {
  }

  onClickYes(index) {

  }

  render() {
    return (
      // map out 2 individual questions from props.state.data
      <div>
        {this.state.questions.slice(0, 2).map((question, index) =>
          <div className="default-Answer" key={index}>
            <b>Q: {this.state.questions[index].question_body}</b>
            <span>
              Helpful? </span> <u> Yes</u> ({this.state.questions[index].question_helpfulness}) <u>Add Answer</u>

            <Answer questionId={this.state.questions[index].question_id} key={index}/>
          </div>
        )}
        <div><button className='btn btn-questions btn-more-questions'>MORE ANSWERED QUESTIONS</button> <button className='btn btn-questions btn-add-a-question'>ADD A QUESTION +</button></div>

      </div>
    )
  }

}

export default QuestionsList;