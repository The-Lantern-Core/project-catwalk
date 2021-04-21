import React, {useState, useEffect} from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx';
import StarRating from '../../starRating.jsx';

const Carousel = (props) => {

  const {children} =props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)

  // Set the length to match current children from props
  useEffect(() => {
      setLength(children.length)
  }, [children])

  const next = () => {
    if (currentIndex < ((length)-1)) {
        setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
      if (currentIndex > 0) {
          setCurrentIndex(prevState => prevState - 1)
      }
  }

  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper'>
        {
          currentIndex > 0 &&
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        }
        <div className='carousel-content-wrapper'>
            <div className='carousel-content' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {children}
            </div>
        </div>
        {
          currentIndex + 2 < ((length) - 1) &&
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        }
      </div>
    </div>
  )
}

export default Carousel;

/*
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starRate: null,
      children: props
    }
    console.log('C.Props', props);
  }



  render () {
    return (

      // <div className='Carousel_place_holder'><h1>Carousel Products Here</h1>
      // <ProductCard rating={this.state.starRate}/>
      // </div>


     //<ProductCard rating={this.state.starRate}/>

     <div className='carousel-container'>
       <div className='carousel-wrapper'>
         <div className='carousel-content-wrapper'>
            <div className='carousel-content'>
              <button className='left-arrow'>&lt;</button>
              {this.props.children}
              <button className='right-arrow'>&gt;</button>
            </div>
         </div>
       </div>
     </div>
    )
  }

}

export default Carousel;

*/