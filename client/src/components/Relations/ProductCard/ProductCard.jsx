import React from 'react';
import RatingBreakdown from '../../Reviews/Ratings/RatingBreakdown.jsx';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    console.log('Product Card', this.props);
  }

  render() {
    return (
      <div className="product-container">Product Card/Related Place Holder
        {this.props.allProducts && this.props.allProducts.map((product, i) => {
          return (
            <div className="product-card" key={product.id} onClick={this.props.handleClick}>
              <img src={product.imageUrl} className="product-card-item-image"/>
              <span className="product-card-item-byline"></span>
              <div className="product-card-item-name" ><h2>{product.name}</h2></div>
              <div className="product-card-item-price">{product.default_price}</div>
              <RatingBreakdown className="product-card-item-rating"/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductCard;

/*
  {
    "id": 19089,
    "campus": "hr-rfe",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-02-23T19:24:34.450Z",
    "updated_at": "2021-02-23T19:24:34.450Z"
  },
*/