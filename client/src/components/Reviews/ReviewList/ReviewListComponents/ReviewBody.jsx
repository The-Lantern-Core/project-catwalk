import React from 'react';

class ReviewBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    }

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState {(
      show: !this.state.show
    });
  }

  render () {
    if (!this.state.show) {
      return ()
    }
  }
}

export default ReviewBody;