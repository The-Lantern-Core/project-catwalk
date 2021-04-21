import React from 'react';

var getInvalidEmailWarning = (validEmail) => {
  if (!validEmail) {
    return (
      <div>
        Please enter a valid Email.
      </div>
    )
  }
}

const AuthFields = (props) => (
  <div>
    <div>
      <label>Nickname:</label>

      <input type='text' className='question-add' maxLength='60' placeholder='Example: jackson11!' onChange={props.handleNickname}/>

      <div className='question-add-name-warning'>
        For privacy reasons, do not use your full name or email address
      </div>
    </div>


    <div>
      <label>Email:</label>
      <input type='email' className='question-add/>' maxLength ='60' placeholder='Example: jackson11@gmail.com' onChange={props.handleEmail}/>
      {getInvalidEmailWarning(props.validEmail)}
      <div>
        For authentication reasons, you will not be emailed
      </div>

    </div>
  </div>
)

export default AuthFields;