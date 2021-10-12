/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Product from '../Product/Product';
const ProductList = (props) => {
  return (
    <div className='productlist' id='nossas-solucoes'>
      <h2>
        <span>// </span>Nossas Soluções
      </h2>
      <div className='products'>
        {props.stats.map((product) => (
          <Product key={product.id} stats={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
