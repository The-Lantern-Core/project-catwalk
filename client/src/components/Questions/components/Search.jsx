import React from 'react';
import QuestionsList from '../components/QuestionsList.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // state for input
    this.state = {
      questions: this.props.questions,
      filter: ''
    }
  }

  // function that handes change of input value
  onSearchChange(e) {
    this.setState({
      filter: e.target.value
    })

    if (this.state.filter.length > 2) {
      var filteredQuestions = this.state.questions.filter(question => question.question_body.includes(this.state.filter))
      this.setState({
        questions: filteredQuestions
      })
    } else {
      this.setState({
        questions: this.props.questions
      })
    }
  }


  render() {
    return (
      // input for filter
      <div >
        <input id="searchQuestions" placeholder="Have a question? Search for answers..." type="text" value={this.state.filter} onChange={this.onSearchChange.bind(this)}></input>

        <div>
          <QuestionsList questions={this.state.questions}/>
        </div>
      </div>

    )
  }

}

export default Search;