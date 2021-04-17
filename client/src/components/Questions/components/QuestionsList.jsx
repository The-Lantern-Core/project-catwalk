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

  render() {
    return (
      // map out 2 individual questions from props.state.data
      <div>
        {this.state.questions.slice(0, 2).map((question, index) =>
          <div className="default-Answer" key={index}>
            <h4>Q: {this.state.questions[index].question_body}</h4>
            <span>
              Helpful? {this.state.questions[index].question_helpfulness}<span> Yes</span> <span>Report</span>
            </span>
            <Answer questionId={this.state.questions[index].question_id} key={index}/>
          </div>
        )}
        <div><button>More answered questions</button> <button>Add a question</button></div>

      </div>
    )
  }

}

export default QuestionsList;