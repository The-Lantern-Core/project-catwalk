import React from 'react';
import Answer from '../components/Answer.jsx';
import QHelpfulness from '../components/QHelpfulness.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions,
      filteredQuestions: null,
      filtered: false,
      load: true,
    }
  }

  componentDidUpdate(oldProps) {
    if (this.props.questions !== oldProps.questions) {
      this.setState({
        load: true,
        questions: this.props.questions,
      })
    }
    if (this.props.filteredQuestions !== oldProps.filteredQuestions) {
      this.setState({
        load: true,
        filtered: true,
        filteredQuestions: this.props.filteredQuestions
      })
    }
  }

  render() {
    if (!this.state.filtered && this.state.load) {
      return (
        // map out 2 individual questions from props.state.data
        <div>
          {this.state.questions.slice(0, this.props.count).map((question, index) =>
            <div className="default-Answer" key={index}>
              <div className='default-answer-header'>
                <b>Q: </b>
                <div className='default-answer-header-details'>
                  <b style={{display:'inline-block'}}>{this.state.questions[index].question_body}</b>

                  <QHelpfulness question={this.state.questions[index]} name={this.props.name} />
                </div>
              </div>
              <Answer questionId={this.state.questions[index].question_id} key={index}/>
            </div>
          )}


        </div>
      )
    } else if (this.state.filtered && this.state.load) {
      return (
        <div>
          {this.state.filteredQuestions.slice(0, this.props.count).map((question, index) =>
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