import React from 'react';
import QuestionsList from '../components/QuestionsList.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // state for input
    this.state = {
      questions: props.results
      filter: ''
    }
  }

  // function that handes change of input value
  onSearchChange(e) {
    this.setState({
      filter: e.target.value
    })

    if (this.state.filter.length > 3) {
      var filteredQuestions = this.state.questions.filter(question => question.question_body.includes(this.state.filter))
      this.setState({
        questions: filteredQuestions
      })
    } else {
      this.setState({
        questions: props.results
      })
    }
  }


  render() {
    return (
      // input for filter
      <div >
        <input id="searchQuestions" placeholder="Have a question? Search for answers..." type="text" value={this.state.filter} onChange={this.onSearchChange.bind(this)}></input>

        <div>
          <QuestionsList />
        </div>
      </div>

    )
  }

}

export default Search;