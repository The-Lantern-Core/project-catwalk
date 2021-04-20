import React from 'react';
import QuestionsList from '../components/QuestionsList.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // state for input
    this.state = {
      questions: this.props.questions,
      filteredQuestions: [],
      displayedQuestions: [this.props.questions[0], this.props.questions[1]],
      filtered: false,
      filter: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  // function that handes change of input value
  onSearchChange(e) {

    this.setState({
      filter: e.target.value
    })

    if (this.state.filter.length > 1) {
      var filteredQuestions = this.state.questions.filter(question => question.question_body.toLowerCase().includes(this.state.filter.toLowerCase()))
      this.setState({
        filteredQuestions: filteredQuestions,
        filtered: true
      })
    } else {
      this.setState({
        filtered: false
      })
    }
  }


  render() {
      return (
        // input for filter
        <div >
          <input style={{
            'width': '75%',
            'padding': '12px 15px',
            'margin': '20px'
          }}id="searchQuestions" placeholder="Have a question? Search for answers..." type="text" onChange={this.onSearchChange}></input>

          <div>
            <QuestionsList questions={this.state.questions} filteredQuestions={this.state.filteredQuestions} filtered={this.state.filtered}/>
          </div>
        </div>
      )
  }


}

export default Search;