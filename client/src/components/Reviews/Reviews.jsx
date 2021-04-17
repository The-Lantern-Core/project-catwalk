import React from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './Ratings/RatingBreakdown.jsx';

class Reviews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (<div>
      ===================================================<br/>
      <h2>Ratings &amp; Reviews</h2>
      <RatingBreakdown average={this.props.average}/>
      <ReviewList />
      ===================================================<br/>
      </div>);
  }
}

export default Reviews;