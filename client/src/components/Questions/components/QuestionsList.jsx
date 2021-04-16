import React from 'react';
import Answer from '../components/Answer.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions
    }
  }



  render() {
    return (
      // map out 2 individual questions from props.state.data

      <div>
        Questions List
        {this.state.questions.slice(0, 3).map((question, index) =>
          <div className="default-Answer">
            Q: {question.results.body}
            <div>
              Helpful? <span>Yes</span> <span>Report</span>
            </div>
            <Answer questionId={this.state.questions[index].results.question_Id}/>
          </div>
        )}
        <div><button>More answered questions</button> <button>Add a question</button></div>

      </div>
    )
  }

}

export default QuestionsList;