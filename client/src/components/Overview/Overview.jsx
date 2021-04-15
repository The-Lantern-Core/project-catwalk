import react from 'react';
import Gallery from './Image-Gallery';
import Style from './Style';


class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProduct: '';
    }
  }



  render() {
    return (
      <div className="Overview">
        <div className="image_gallery">
          <Gallery />
        </div>
        <div className="style_cart">
          <Style />
        </div>
      </div>
    )
  }
}

export default Overview;