import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash/map';

import CartItem from '@/components/Cart/CartItem';
import './Cart.scss';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape()),
    PropTypes.shape(),
  ]).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

const Cart = props => (
  <div className="shop__cart">
    <h2 className="shop__cart-title">Cart</h2>
    <ul className="shop__cart-list">
      <CartItem />
      {props.children}
      <li className="shop__cart-total">{`Total amount: ${props.totalPrice} USD`}</li>
    </ul>

  </div>
);

Cart.propTypes = propTypes;

export default Cart;
