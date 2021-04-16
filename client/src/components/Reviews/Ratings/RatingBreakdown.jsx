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
    return (<div
      className='rating-breakdown'
      style={{
        'border': 'solid 1px #d1d1d1'
      }}>
      <h3>Rating Breakdown</h3>
      {this.props.average}
      <StarRating rating={this.props.average}/>
      <Histogram />
      <Characteristics charList = {['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit']}/>
      </div>);
  }
}

export default RatingBreakdown;