import React from 'react';
import StarRating from '../../../starRating.jsx';
import Photos from './Photos.jsx';
import Helpfulness from './Helpfulness.jsx';
import moment from 'moment';

const ReviewTile = (props) => (
  <div
  className='review-list-tile'
    style={{
      'borderBottom': 'solid 1px gray',
      'marginTop': '20px',
      'fontSize': '90%'
    }}>


    {/* -------------------------*/}
    <div
    className='review-tile-header review-tile-element'
    style={{
      'display': 'grid',
      'gridTemplateColumns': '5fr auto'}}>

      <StarRating rating = {props.review.rating}/>
      <div
      style={{
        'justifySelf': 'end',
        'color': 'gray'}}>
        {props.review.reviewer_name},&nbsp;&nbsp;
        {moment(props.review.date).format("MMMM Do, YYYY")}
      </div>
    </div>

    {/* -------------------------*/}

    {props.review.summary ?
    <div
    className='review-tile-summary review-tile-element'>
      <b style={{
        'fontSize': '20px',
        'height': '20px'}}>{props.review.summary}</b></div> : '' }

    {/* -------------------------*/}
    <div
    className='review-tile-body review-tile-element'>
      {props.review.body} </div>

    {/* -------------------------*/}

    <Photos photoList = {props.review.photos}/>

    {/* -------------------------*/}

    {props.review.recommend ?
    <div
    className='review-tile-recommend review-tile-element'>
      ✓ I recommend this item</div> : '' }

    {/* -------------------------*/}

    {props.review.response ?
    <div
    className='review-tile-response review-tile-element'>
      {props.review.response}</div> : '' }

    {/* -------------------------*/}

    <Helpfulness
    value={props.review.helpfulness}/>
  </div>
)

export default ReviewTile;