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
      'gridTemplateColumns': '2.5fr 0.5fr 6fr',
      'gridTemplateRows': '40px auto'
    }}>
      <div
      className='review-title section-title'
      style={{
        'gridColumnStart': '1',
        'gridColumnEnd': 'span 3'
      }}>Ratings &amp; Reviews </div>
      <RatingBreakdown average={this.props.average} reviewMeta={this.props.reviewMeta}/>
      <div></div>
      <ReviewList productId = {this.props.productId}/>
      </div>);
  }
}

export default Reviews;