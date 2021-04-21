import React from 'react';

const QuestionInput = (props) => (
  <div>
    <label>Question</label>
    <div><input className='question-add-body' name='body' maxLength='1000' onChange={props.handleQuestion}></input></div>

  </div>
)

export default QuestionInput;