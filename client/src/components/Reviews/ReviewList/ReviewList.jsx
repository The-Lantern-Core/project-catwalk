import React from 'react';
import $ from 'jquery';
import { Token } from '/config.js';
import ReviewTile from './ReviewListComponents/ReviewTile.jsx'

class ReviewList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayNumber: 2,
      reviewData: [],
      sort: 'relevant'
    };
    this.updateReviewData = this.updateReviewData.bind(this);
  }

  componentDidUpdate(oldProps) {
    if(this.props.productId !== oldProps.productId) {
      this.updateReviewData();
    }
  }



  updateReviewData() {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/`,
      headers: {Authorization: Token},
      data: {
        'product_id': this.props.productId,
        'count': this.state.displayNumber,
        'sort': this.state.sort
      },
      success: (data) => {
        console.log(data)
        this.setState({reviewData: data.results})
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  render() {
    return (<div
    className='review-list'
    style={{
      'marginTop': '14px'
    }}>
      Sorted by relevance
      {this.state.reviewData.map(element => {
        return (<ReviewTile review = {element} key = {'review-list=' + element.review_id}/>);
      })}
      <br/>
      <button
      className='btn btn-reviews btn-more-reviews'>
        MORE REVIEWS</button>
      <button
      className='btn btn-reviews btn-add-reviews'>ADD A REVIEW +</button>
      </div>);
  }
}

export default ReviewList;