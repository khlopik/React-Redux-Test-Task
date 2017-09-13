import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss';

const propTypes = {
  id: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const defaultProps = {
  id: 0,
  productName: 'product name',
  productPrice: 0,
  addToCart: () => {},
};

const Product = props => (
  <figure className="product">
    <p className="product__image">img</p>
    <figcaption className="product__name">{props.productName}</figcaption>
    <p className="product__price">{`${props.productPrice} USD`}</p>
    <button
      className="product__add"
      onClick={() => {
        props.addToCart(props.id);
      }}
    >Add to cart</button>
  </figure>
);

Product.propTypes = propTypes;
Product.defaultProps = defaultProps;

export default Product;
