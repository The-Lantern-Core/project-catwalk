import React from 'react';
import WidgetContext from '../../../WidgetContext.jsx';

class Photos extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      photoUrl: '',
      photoFile: ''
    };
    this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this);
  }

  handlePhotoSubmit(e) {
    e.preventDefault();
    this.props.handlePhotos(e.target[0].value)
    // this.props.handlePhotos(e.target[1].value)
  }

  render() {
    return (
      <div>
        Upload up to 5 photos:
        {this.props.photos.map((photo, i) => {
          return (
            <div className='review-added-photo' key={'review-photo' + i}
              style={{'display': 'grid', 'gridTemplateColumns': '28px auto 32px'}}>

              <div className='review-added-photo-img'>
                <img src={photo}
                  style={{
                    'height': '20px',
                    'width': '20px',
                    'border': '2px solid white'
                  }}/>
              </div>

              <div className='review-added-photo-src'
                style={{
                  'paddingTop': '2px',
                  'paddingRight': '10px',
                  'overflow': 'hidden',
                  'textOverflow': 'ellipsis',
                  'whiteSpace': 'nowrap'
                }}>{photo}
              </div>

              <WidgetContext.Consumer>
              {({addWidgetName}) => {
                return (
                  <div {...addWidgetName()}className='review-added-photo-src'
                    onClick={() => {this.props.handlePhotoDelete(i)}}
                    style={{
                      'paddingTop': '3px',
                      'paddingRight': '10px',
                      'justifySelf': 'end'
                    }}>✕</div>
                  )
                }}
                </WidgetContext.Consumer>
            </div>)
        })}
        {(this.props.photos.length <5) ?
        <form onSubmit={this.handlePhotoSubmit}>
          <input type="text" id="myPhotoUrl" name="fileUrl"/>
          <input type="submit"/>
        </form> : null}

      </div>)
  }
}

export default Photos;