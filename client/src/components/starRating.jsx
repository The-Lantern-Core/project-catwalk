import React from 'react';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
  }

  nearestQuarter(num){
    var rounded = (Math.round(num * 4) / 4);
    return rounded;
  }

  getFillArray(num) {
    num = num || 0;
    var rating = this.nearestQuarter(num);
    var stars = [];

    for (var i = 0; i < 5; i++) {
      if (rating < 1 && rating > 0) {
        stars.push(rating);
        rating = 0;
      } else if (rating >= 1) {
        stars.push(1);
        rating -= 1;
      } else {
        stars.push(0);
      }
    }

    for (var i = 0; i < 5; i++) {
      if (stars[i] === 0.25) {
        stars[i] = 6;
      } else if (stars[i] === 0.5) {
        stars[i] = 9;
      } else if (stars[i] === 0.75) {
        stars[i] = 12;
      } else if (stars[i] === 1) {
        stars[i] = 18;
      }
    }
    return stars;
  }

  render() {
    return(<div>

      {this.getFillArray(this.props.rating).map((rating, i) => {
        return (<div
          key={'star-' + i}
          className='star-block'
          style={{
            'width' : '18px',
            'height' : '18px',
            'display': 'inline-block',
            'position': 'relative'
            }}>

          <div
            className='star-fill'
            style={{
              'width' : `${parseInt(rating)}px`,
              'height' : '18px',
              'backgroundColor': '#333333'
              }}>

            <img
            className='star-outline'
            src='star.png'
            alt='stars alt'
            style={{
              'width' : '18px',
              'display': 'inline-block'
              }}>
            </img>

          </div>

        </div>)
      })}
    </div>)

  }
}

export default StarRating;