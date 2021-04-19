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

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  // function that handes change of input value
  onSearchChange(e) {

    this.setState({
      filter: e.target.value
    })

    if (this.state.filter.length > 2) {
      var filteredQuestions = this.state.questions.filter(question => question.question_body.toLowerCase().includes(this.state.filter.toLowerCase()))
      this.setState({
        questions: filteredQuestions
      })
    } else {
      this.setState({
        questions: this.props.questions
      })
    }

    console.log(filteredQuestions);
  }


  render() {
    return (
      // input for filter
      <div >
        <input style={{
          'width': '75%',
          'padding': '12px 15px',
          'margin': '20px'
        }}id="searchQuestions" placeholder="Have a question? Search for answers..." type="text" value={this.state.filter} onChange={e => this.onSearchChange(e.target.value)}></input>

        <div>
          <QuestionsList questions={this.state.questions}/>
        </div>
      </div>

    )
  }

}

export default Search;