import React from 'react';
import Answer from '../components/Answer.jsx';
import QHelpfulness from '../components/QHelpfulness.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions,
      filteredQuestions: this.props.filteredQuestions,
      filtered: this.props.filtered,
      load: true
    }
  }

  // componentDidUpdate(oldProps) {
  //   if (this.props.filtered !== oldProps.filtered) {
  //     this.setState({
  //       load: true,
  //       filteredQuestions: this.props.filteredQuestions,
  //       filtered: this.props.filtered
  //     })
  //   }
  // }

  render() {
    if (!this.state.filtered && this.state.load) {
      return (
        // map out 2 individual questions from props.state.data
        <div>
          {this.state.questions.slice(0, this.props.count).map((question, index) =>
            <div className="default-Answer" key={index}>
              <b style={{display:'inline-block'}}>Q: {this.state.questions[index].question_body}</b>
              <QHelpfulness question={this.state.questions[index]} name={this.props.name} />

              <Answer questionId={this.state.questions[index].question_id} key={index}/>
            </div>
          )}


        </div>
      )
    } else if (this.state.filtered && this.state.load) {
      return (
        <div>
          {this.state.filteredQuestions.slice(0, 2).map((question, index) =>
            <div className="default-Answer" key={index}>
              <div><b>Q: {this.state.filteredQuestions[index].question_body}</b>
              <QHelpfulness question={this.state.filteredQuestions[index]} product={this.props.name}/></div>

              <Answer questionId={this.state.filterQuestions[index].question_id} key={index}/>
            </div>
          )}


        </div>
      )
    }
  }

}

export default QuestionsList;