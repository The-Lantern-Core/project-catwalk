import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div className='header-container'>
        <div className='placeholder-header-logo' style={{ width: '100%', height: '120px', backgroundColor: 'purple'}}><h1><em><u>
          Logo</u></em></h1></div>
      </div>
    )
  }
}
export default Header;