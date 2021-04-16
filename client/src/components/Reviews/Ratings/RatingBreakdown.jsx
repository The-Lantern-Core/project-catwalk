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
    return (<div>
      <h3>Rating Breakdown</h3>
      <StarRating rating={Math.random() * 5}/>
      <Histogram />
      <Characteristics charList = {['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit']}/>
      </div>);
  }
}

export default RatingBreakdown;