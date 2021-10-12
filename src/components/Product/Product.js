import React from 'react';

const Product = (props) => {

  return (
    <div className='product'>
      <img src={props.stats.image} alt={props.stats.title} />
      <div>
        <p className='product-title'>{props.stats.title}</p>
        <p className='product-category'>{props.stats.category}</p>
      </div>

      <ul className='product-features'>
        <li> Rating: {props.stats.rating.rate}</li>
        <li>Count: {props.stats.rating.count}</li>
      </ul>

      <button>Ver solução</button>
    </div>
  ); 
};

export default Product;
