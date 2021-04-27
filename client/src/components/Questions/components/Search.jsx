import React from 'react';
import QuestionsList from '../components/QuestionsList.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // state for input
    this.state = {
      filteredQuestions: [],
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

    if (e.target.value.length > 2) {
      var filteredQuestions = this.props.questions.filter(question => question.question_body.toLowerCase().includes(e.target.value.toLowerCase()))
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
          }}id="searchQuestions" placeholder="Have a question? Search for answers..." type="text" value={this.state.filter} onChange={this.onSearchChange}></input>

          <div>
            <QuestionsList questions={this.props.questions} filteredQuestions={this.state.filteredQuestions} filtered={this.state.filtered} name={this.props.name} count={this.props.count}/>
          </div>
        </div>
      )
  }


}

export default Search;