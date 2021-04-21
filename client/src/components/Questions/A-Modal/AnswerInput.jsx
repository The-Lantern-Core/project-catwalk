import React from 'react';

const AnswerInput = (props) => (
  <div>
    <label>Answer</label>
    <div><input className='answer-add-body' name='body' maxLength='1000' onChange={props.handleAnswer}></input></div>

  </div>
)

export default AnswerInput;