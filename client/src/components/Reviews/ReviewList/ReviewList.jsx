import React from 'react';
import $ from 'jquery';
import { Token } from '../../../../../config.js';
import ReviewTile from './ReviewListComponents/ReviewTile.jsx';
import Filter from './ReviewListComponents/Filters.jsx';
import AddReview from './Modal/AddReview.jsx';
import WidgetContext from '../../WidgetContext.jsx';

class ReviewList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 2,
      sort: 'relevant',
      reviewData: [],
      filteredData: [],
      displayedData: [],
      maxReviews: 0,
      moreReviews: true,
      show: false
    };
    this.updateReviewData = this.updateReviewData.bind(this);
    this.updateMoreReviews = this.updateMoreReviews.bind(this);
    this.updateSort = this.updateSort.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  /**
   * updates the productId once it is uploaded
   * updates the filteredData every time the filter is changed
   * @param {*} oldProps
   */
  componentDidUpdate(oldProps) {
    if(this.props.productId !== oldProps.productId) {
      this.updateReviewData(100);
    }

    if(JSON.stringify(this.props.filter) !== JSON.stringify(oldProps.filter)) {
      var filteredData = this.filterReviews(this.state.reviewData);
      this.setState({
        filteredData: filteredData,
        displayedData: filteredData.slice(0, this.state.count)
      })
    }
  }

  /**
   * @param {an array of all reviews} reviews
   * @returns an array of filtered reviews
   */
  filterReviews(reviews) {
    var filteredData = [];

    /**
     * reduces the array of true/false filters to
     * a string of indices where the value of that
     * index is true (the filter is on)
     */
    const reducer = (accumulator, current, index) => {
      if (current){ return accumulator + index; }
       return accumulator;
    }
    var filters = this.props.filter.reduce(reducer, '');

    //updates filteredData with the reviews that apply
    if (filters === '' || filters === '01234'){
      filteredData = reviews;
    } else {
      for (var i = 0; i < reviews.length; i++) {
        if (filters.indexOf(reviews[i].rating - 1) !== -1) {
          filteredData.push(reviews[i])
        }
      }
    }

    return filteredData;
  }

  /**
   * adds 2 reviews to the array of reviews that are displayed
   *
   * sets state.moreReviews to false if the number of reviews
   *    in the displayData is the same as the number of
   *    reviews in the master array of reviews (no more reviews)
   *
   * state.moreReviews is what controls whether the more reviews
   *    button displays
   */
  updateMoreReviews() {
    var twoMore = this.state.count + 2;
    var moreReviews = true;
    if (twoMore >= this.state.filteredData.length) {
      moreReviews = false;
    }
    this.setState({
      count: twoMore,
      displayedData: this.state.filteredData.slice(0, twoMore),
      moreReviews: moreReviews
    });
  }

  /**
   * re-retrieves data from database with the new sort parameter
   * @param {sort selector event} e
   */
  updateSort(e) {
    this.setState({sort: e.target.value});
    this.updateReviewData(this.state.maxReviews, e.target.value);
  }

  /**
   * Retrieves reviews from the database
   * Contintues increasing the number of reviews that is retrieved
   *    until all are retrieved
   * @param {the number of reviews to retrieve} count
   * @param {the sort parameter} sort
   */
  updateReviewData(count, sort) {
    $.get({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/`,
      headers: {Authorization: Token},
      data: {
        'product_id': this.props.productId,
        'count': count || this.state.count,
        'sort': sort || this.state.sort
      },
      success: (data) => {
        //there are no more reviews to retrieve
        if (data.results.length <= count) {
          var filteredData = this.filterReviews(data.results);
          this.setState({
            reviewData: data.results,
            filteredData: filteredData,
            displayedData: filteredData.slice(0, this.state.count),
            maxReviews: data.results.length,
            moreReviews: (filteredData <= 2 ? false : true)
          })

        //there are more to retrieve
        } else {
          this.updateReviewData(count + 100);
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  showModal() {
    this.setState({
      show: true
    });
  }

  closeModal() {
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <div className='review-list-and-add-modal' style={{'overflow': 'hidden', 'minWidth': '375px'}}>
        <div className='review-list'>

          {/* DROPDOWN MENU */}
          <div className='review-list-sort'>
            <label className='review-list-header'>{this.state.maxReviews} reviews, sorted by </label>
            <select className='review-list-sort review-list-sort-select'
            onChange={this.updateSort}>
              <option value='relevant'>relevance</option>
              <option value='newest'>newest</option>
              <option value='helpful'>helpful</option>
            </select>
          </div>

          {/* FILTERS */}
          <Filter filter={this.props.filter} toggleFilter={this.props.toggleFilter}/>

          {/* REVIEWS */}
          {this.state.displayedData.map(element => {
            return (<ReviewTile
              review = {element}
              key = {'review-list=' + element.review_id}
              updateFilteredReviews = {this.updateFilteredReviews}/>);
          })}
          <br/>

          {/* BUTTONS */}


          <WidgetContext.Consumer>
            {({addWidgetName}) => {
              return (
                this.state.moreReviews ?
                  <button {...addWidgetName()} className='btn btn-reviews btn-more-reviews'
                  onClick={this.updateMoreReviews}>
                    MORE REVIEWS
                  </button>
                  : ''
                )
              }
            }
          </WidgetContext.Consumer>

          <button className='btn btn-reviews btn-add-reviews'
          onClick={() => {this.showModal();}}>
            ADD A REVIEW +
          </button>
          <br/>
        </div>

        {/* ADD REVIEWS MODAL */}
        <AddReview
          show={this.state.show}
          closeModal={this.closeModal}
          reviewMeta={this.props.reviewMeta}
          productId={this.props.productId}
          product={this.props.product}
          updateReviewData={this.updateReviewData}
          getReviewMeta={this.props.getReviewMeta}/>
      </div>
    );
  }
}

export default ReviewList;