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
    return (<div
    className='review-widget'
    style={{
      'display': 'grid',
      'grid-template-columns': '3fr 6fr',
      'padding': '5%',
      'border': 'solid 1px #d1d1d1'
    }}>
      <div
      className='review-title'
      style={{
        'border': 'solid 1px #d1d1d1',
        'grid-column-start': '1',
        'grid-column-end': 'span 2'
      }}>Ratings &amp; Reviews </div>
      <RatingBreakdown />
      <ReviewList />
      </div>);
  }
}

export default Reviews;