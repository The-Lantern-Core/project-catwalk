import React from 'react';
import $ from 'jquery';
import { Token } from '/config.js';
import ReviewTile from './ReviewListComponents/ReviewTile.jsx'

class ReviewList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 2,
      reviewData: [],
      maxReviews: 0,
      displayedData: [],
      moreReviews: true
    };
    this.updateReviewData = this.updateReviewData.bind(this);
    this.updateMoreReviews = this.updateMoreReviews.bind(this);
    this.updateSort = this.updateSort.bind(this);
  }

  componentDidUpdate(oldProps) {
    if(this.props.productId !== oldProps.productId) {
      this.updateReviewData(100);
    }
  }

  updateMoreReviews() {
    var twoMore = this.state.count + 2;
    var moreReviews = true;
    if (twoMore >= this.state.maxReviews) {
      moreReviews = false;
    }
    this.setState({
      count: twoMore,
      displayedData: this.state.reviewData.slice(0, twoMore),
      moreReviews: moreReviews
    });
  }

  updateSort(e) {
    this.updateReviewData(this.state.maxReviews, e.target.value);
  }

  updateReviewData(count, sort) {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/`,
      headers: {Authorization: Token},
      data: {
        'product_id': this.props.productId,
        'count': count || this.state.count,
        'sort': sort || 'relevant'
      },
      success: (data) => {
        if (data.results.length <= count) {
          this.setState({
            reviewData: data.results,
            maxReviews: data.results.length,
            displayedData: data.results.slice(0, this.state.count),
            moreReviews: (data.results <= 2 ? false : true)
          })
        } else {
          this.updateReviewData(count + 100);
        }
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
        <form
        style={{
          'fontWeight': '600',
          'fontSize': '20px'
        }}>
          <label>{this.state.maxReviews} reviews, sorted by </label>
          <select style={{
            'fontWeight': '600',
            'fontSize': '20px',
            'border': 'none',
            'borderBottom': '3px solid black'
          }}
          onChange={this.updateSort}>
            <option value='relevant'>relevance</option>
            <option value='newest'>newest</option>
            <option value='helpful'>helpful</option>
          </select>
        </form>

        {this.state.displayedData.map(element => {
          return (<ReviewTile review = {element} key = {'review-list=' + element.review_id}/>);
        })}
        <br/>

        {this.state.moreReviews ?
          <button
          className='btn btn-reviews btn-more-reviews'
          onClick={this.updateMoreReviews}>
            MORE REVIEWS
          </button>
          : ''}

        <button
        className='btn btn-reviews btn-add-reviews'>ADD A REVIEW +</button>

      </div>);
  }
}

export default ReviewList;