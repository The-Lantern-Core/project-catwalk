import React from 'react';
import { Token } from '/config.js';
import DynamicStarRating from './DynamicStarRating.jsx';
import EmptyFields from './EmptyFields.jsx';
import AuthFields from './AuthFields.jsx';
import CharacteristicsForm from './CharacteristicsForm.jsx';
import Recommend from './Recommend.jsx';
import TextDetail from './TextDetail.jsx';
import $ from 'jquery';
import Modal from 'react-modal';
Modal.setAppElement('#app');

var req = () => {
  return <span className='required'>*</span>
}

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      ratingPhrase: '',
      recommend: '',
      characteristics: {},
      charMap: {},
      summary: '',
      body: '',
      photos: [],
      nickname: '',
      email: '',
      validEmail: true,
      empty: []
    }
    this.resetModal = this.resetModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleUpdateRating = this.handleUpdateRating.bind(this);
    this.handleRecommend = this.handleRecommend.bind(this);
    this.handleCharSelect = this.handleCharSelect.bind(this);
    this.handleSummary = this.handleSummary.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleNickname = this.handleNickname.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.minimumCharacters = this.minimumCharacters.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (this.props.reviewMeta !== oldProps.reviewMeta) {
      var characteristics = {};
      var charMap = {};
      for (var key in this.props.reviewMeta.characteristics) {
        characteristics[this.props.reviewMeta.characteristics[key].id] = '0'
        charMap[this.props.reviewMeta.characteristics[key].id] = key
      }

      this.setState({
        characteristics,
        charMap
      })
    }
  }

  resetModal() {
    this.props.closeModal();
    var newChar = {};
    for (var key in this.state.characteristics) {
      newChar[key] = '0'
    }
    this.setState({
      rating: 0,
      ratingPhrase: '',
      recommend: '',
      characteristics: newChar,
      charMap: {},
      summary: '',
      body: '',
      photos: [],
      nickname: '',
      email: '',
      validEmail: true,
      empty: []
    })
  }

  submitForm(e) {
    e.preventDefault();
    var data = {
      "product_id": this.props.productId,
      "rating": this.state.rating,
      "summary": this.state.summary,
      "body": this.state.body,
      "recommend": this.state.recommend,
      "name": this.state.nickname,
      "email": this.state.email,
      "photos": this.state.photos,
      "characteristics": this.state.characteristics
    }

    var empty = [];
    if (data.rating === 0) {
      empty.push('Overall rating');
    }
    if (data.recommend === '') {
      empty.push('Recommendation');
    }
    for(var id in data.characteristics) {
      if (data.characteristics[id] === '0') {
        empty.push('Characteristic: ' + this.state.charMap[id])
      }
    }
    if (data.body.length < 50) {
      empty.push('Review body');
    }
    if (data.name === '') {
      empty.push('Nickname');
    }
    if (data.email === '') {
      empty.push('Email');
    }

    if (empty.length){
      this.setState({empty})
    } else {
      console.log('Data posted')
      console.log(data)

      $.ajax({
        'type': 'POST',
        'headers': {Authorization: Token},
        'url': 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews',
        'data': data,
        'success': () => {this.resetModal();},
        'error': (err) => {console.error(err);}
      })

    }
  }

  handleUpdateRating(rating) {
    this.setState({rating: rating});
  }

  handleRecommend(e) {
    var rec = '';
    if (e.target.value === 'true') {
      rec = true;
    } else if (e.target.value === 'false') {
      rec = false;
    }

    this.setState({recommend: rec})
  }

  handleCharSelect(e) {
    var oldChar = JSON.parse(JSON.stringify(this.state.characteristics));
    oldChar[e.target.name] = e.target.value;
    this.setState({
      characteristics: oldChar
    })
  }

  handleSummary(e) {
    this.setState({
      summary: e.target.value
    })
  }

  handleBody(e) {
    this.setState({
      body: e.target.value
    })
  }

  handleNickname(e) {
    this.setState({
      nickname: e.target.value
    })
  }

  handleEmail(e) {
    var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (e.target.value.match(mailformat)) {
      this.setState({
        email: e.target.value,
        validEmail: true
      })
    } else {
      this.setState({
        email: '',
        validEmail: false
      })
    }

  }

  minimumCharacters() {
    if (this.state.body.length >= 50) {
      return <div className='review-add-body-min'>Minimum reached</div>
    } else {
      return <div className='review-add-body-min required'>
        Minimum characters left: {50 - this.state.body.length}
      </div>
    }
  }

  render() {
    if(this.props.reviewMeta && this.props.product) {
      return(
        <Modal
          isOpen={this.props.show}
          contentLabel='Add Review'
          className='review-add-modal'
          onRequestClose={this.resetModal}
          >
            <div className='review-add-header'
            style={{'display': 'grid', 'gridTemplateColumns': 'auto auto '}}>

              <div className='review-add-title'>Write Your Review</div>
              <div className='btn-add-reviews-close' onClick={this.resetModal}>✕</div>
              <div className='review-add-subtitle'>About the {this.props.product.name}</div>

            </div>

            {/* ------------------------------------------------- */}

            <div className='review-add-form'>

              <DynamicStarRating
                handleUpdateRating={this.handleUpdateRating}
                ratingPhrase={this.state.ratingPhrase}/><br/>

              <Recommend req={req} handleRecommend={this.handleRecommend}/><br/>

              <CharacteristicsForm
                req={req}
                characteristics={this.props.reviewMeta.characteristics}
                handleCharSelect={this.handleCharSelect}/><br/>

              <TextDetail req={req} handleBody={this.handleBody}
                handleSummary={this.handleSummary} minimumCharacters={this.minimumCharacters}/><br/>

              <div>upload photos</div><br/>

              <AuthFields req={req} validEmail={this.state.validEmail}
                handleNickname={this.handleNickname} handleEmail={this.handleEmail}/><br/>

              <EmptyFields empty={this.state.empty}/><br/>

              <button className='btn-submit-reviews' onClick={this.submitForm}>submit</button>
            </div>
          </Modal>
      );
    } else {
      return (
        null
      );
    }
  }
}

export default AddReview;