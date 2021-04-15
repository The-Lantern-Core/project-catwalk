import React from 'react';

import Search from '../components/Search.jsx'

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [];
    };
  }

  componentDidLoad() {

    // Get Request to the Questions API server

    // set state for questions

  }

  render() {
    return (
      <div>
        <div>Title</div>

        <Search />
      </div>
    )
  }

}

export default Questions;