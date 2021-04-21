import React from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import RatingBreakdown from './Ratings/RatingBreakdown.jsx';

class Reviews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: [false, false, false, false, false]
    };
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  /**
   * Toggles the index of the filter array on and off
   * Each index represents a number of stars (index + 1)
   * @param {index of the filter array to toggle} index
   */
  toggleFilter(index) {
    var newFilter = this.state.filter.slice(0, this.state.filter.length);
    newFilter[index] = !newFilter[index];
    this.setState({filter: newFilter})
  }

  render() {
    return (
      <div className='review-widget'>
        <div className='review-title section-title'>Ratings &amp; Reviews </div>

        <RatingBreakdown
          average={this.props.average}
          reviewMeta={this.props.reviewMeta}
          toggleFilter={this.toggleFilter}/>

        {/* filler for center column */}
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

        <ReviewList
          productId = {this.props.productId}
          product = {this.props.product}
          reviewMeta={this.props.reviewMeta}
          filter={this.state.filter}
          toggleFilter={this.toggleFilter}
          getReviewMeta={this.props.getReviewMeta}/>
      </div>);
  }
}

export default Reviews;