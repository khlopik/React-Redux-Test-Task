import React from 'react';
import { map } from 'lodash/map';

import './Product.scss'

const Products = props => {
  return (
    <div className="products">
      <h2 className="products__title">Products</h2>
      <div className="products__product-list">
        {props.children}
      </div>
    </div>
  );
};

export default Products;
