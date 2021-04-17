import React from 'react';
import StarRating from '../../../starRating.jsx';
import Photos from './Photos.jsx';
import Helpfulness from './Helpfulness.jsx';

const ReviewTile = (props) => (
  <div>
    <br/>
    <b>Review Tile {props.review}</b> <br/>
    <StarRating rating = {Math.random() * 5}/> name date <br/>
    summary <br/>
    body <br/>
    <Photos photoList = {[1, 2, 3, 4, 5]}/>
    recommend <br/>
    response <br/>
    <Helpfulness />
  </div>
)

export default ReviewTile;