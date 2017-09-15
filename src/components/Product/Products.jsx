import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash/map';

import './Product.scss';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const Products = props => (
  <div className="products">
    <h2 className="products__title">Products</h2>
    <div className="products__product-list">
      {props.children}
    </div>
  </div>
);

Products.propTypes = propTypes;

export default Products;
