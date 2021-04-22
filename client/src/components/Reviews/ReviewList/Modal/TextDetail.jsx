import React from 'react';

const TextDetail = (props) => (
  <div>
    <label>Review Summary </label>
      <input type='text' className='review-add-summary'
      id='summary' name='summary' maxLength='60'
      onChange={props.handleSummary}/>

    <br/>
    <br/>

    {props.req()}Review body
    <textarea className='review-add-body'
      rows='4' name='body' maxLength='1000'
      onChange={props.handleBody}></textarea>

    <br/>

    {props.minimumCharacters()}
  </div>
);

export default TextDetail;