import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  cartItem: PropTypes.shape({
    itemName: PropTypes.string,
    price: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    quantity: PropTypes.number,
    id: PropTypes.number,
  }),
  changeQuantity: PropTypes.func,
  removeProduct: PropTypes.func,
};

const defaultProps = {
  cartItem: {
    itemName: 'Items',
    price: 0,
    quantity: 0,
    id: 0,
  },
  changeQuantity: () => {},
  removeProduct: () => {},
};

const CartItem = (props) => {
  this.itemQuantity = {};
  const quantity = props.cartItem.quantity ?
    (<input
      className="shop__cart-counter"
      type="number"
      min="1"
      value={props.cartItem.quantity}
      ref={(input) => { this.itemQuantity[props.cartItem.id.toString()] = input; }}
      onChange={() => {
        props.changeQuantity(props.cartItem.id,
          parseInt(this.itemQuantity[props.cartItem.id].value));
      }}
    />) :
    <span>Quantity</span>;
  const remove = props.cartItem.quantity ?
    (<button
      className="shop__remove-product"
      onClick={() => {
        props.removeProduct(props.cartItem.id);
      }}
    >-</button>) :
    <span>Remove</span>;
  return (
    <li className="shop__cart-item">
      <span>{props.cartItem.itemName}</span>
      <span>{props.cartItem.quantity ? `${props.cartItem.price} USD` : 'Price'}</span>
      {quantity}
      <span>{props.cartItem.quantity ?
        `${props.cartItem.price * props.cartItem.quantity} USD` :
        'Total price'}</span>
      {remove}
    </li>
  );
};

CartItem.propTypes = propTypes;
CartItem.defaultProps = defaultProps;

export default CartItem;
