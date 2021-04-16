import React from 'react';



class Style extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProduct: ''
    }
  }



  render() {
    return (
      <div className="Style">
        <div className="style_thumbnails">

        </div>
        <div className="size_quantity_form">

        </div>
      </div>
    )
  }
}

export default Style;