import React from 'react';
import ReviewTile from './ReviewListComponents/ReviewTile.jsx'

class ReviewList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (<div
    className='review-list'
    style={{
      'border': 'solid 1px #d1d1d1'
    }}>
      <h3>Review List</h3>
      Sorted by relevance
      {[1, 2].map(element => {
        return (<ReviewTile review = {element} key = {'review-list=' + element}/>);
      })}
      <br/>
      <button>More Reviews</button>
      <button>Add A Review</button>
      </div>);
  }
}

export default ReviewList;