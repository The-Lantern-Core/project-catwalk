import React from 'react';
import Histogram from './RatingBreakdownComponents/Histogram.jsx';
import Characteristics from './RatingBreakdownComponents/Characteristics.jsx';
import StarRating from '../../starRating.jsx'

class RatingBreakdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.reviewMeta !== null) {
      return (
      <div className='rating-breakdown'
        style={{
          'minWidth': '205px'
        }}>

        <div className='rating-breakdown-header'
        style={{
          'display': 'grid',
          'gridTemplateColumns': '110px auto',
          'gridTemplateRows': '14px auto'}}>

          <div className='rating-breakdown-average'
          style={{
            'fontSize': '65px',
            'fontWeight': '600',
            'gridRowStart': '1',
            'gridRowEnd': 'span 2'
            }}>
            {(Math.round(this.props.average * 10) / 10) || '--'}
          </div>

          <div className='rating-breakdown-star-rating'
          style={{
            'gridRowStart': '2'
          }}>
            <StarRating rating={this.props.average}/>
          </div>

        </div>

        <div className='rating-breakdown-average'
        style={{
          'margin': '20px 0'
        }}>
          {Math.round(
            parseInt(this.props.reviewMeta.recommended.true) /
            (parseInt(this.props.reviewMeta.recommended.true) + parseInt(this.props.reviewMeta.recommended.false))
            *100) || '-'}
            % recommend this product
        </div>

        <Histogram ratings={this.props.reviewMeta.ratings}
              toggleFilter = {this.props.toggleFilter}/>
        <Characteristics charList = {this.props.reviewMeta.characteristics}/>
      </div>);
    } else {
      return null;
    }

  }
}

export default RatingBreakdown;