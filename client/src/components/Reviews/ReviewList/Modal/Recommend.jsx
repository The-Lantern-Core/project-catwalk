import React from 'react';

const Recommend = (props) => (
  <div className='review-add-recommend-component'>
    {props.req()}Would you recommend this item?
    <input type='radio' name='recommend' id='recommend-yes'
      value='true' onClick={props.handleRecommend}/>
    <label>Yes</label>

    <input type='radio' name='recommend' id='recommend-no'
      value='false' onClick={props.handleRecommend}/>
    <label>No</label>
  </div>
)

export default Recommend;