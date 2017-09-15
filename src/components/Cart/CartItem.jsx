import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  cartItem: PropTypes.shape({
    itemName: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
  changeQuantity: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

const CartItem = (props) => {
  this.itemQuantity = {};
  const quantity = (<input
    className="shop__cart-counter"
    type="number"
    min="1"
    max="99"
    maxLength="2"
    pattern="\d+{1,3}"
    value={props.cartItem.quantity}
    ref={(input) => { this.itemQuantity[props.cartItem.id.toString()] = input; }}
    onChange={() => {
      const value = parseInt(this.itemQuantity[props.cartItem.id].value);
      if (Number.isInteger(value) && value > 99) {
        return;
      }
      props.changeQuantity(props.cartItem.id, value);
    }}
    onBlur={() => {
      const value = parseInt(this.itemQuantity[props.cartItem.id].value);
      if (!Number.isInteger(value)) {
        props.changeQuantity(props.cartItem.id, 1);
      }
    }}
  />);
  const remove = (<button
    className="shop__remove-product"
    onClick={() => {
      props.removeProduct(props.cartItem.id);
    }}
  >-</button>);
  return (
    <li className="shop__cart-item">
      <span>{props.cartItem.itemName}</span>
      <span>{props.cartItem.quantity ? `${props.cartItem.price} USD` : ''}</span>
      {quantity}
      <span>{props.cartItem.quantity ? `${props.cartItem.price * props.cartItem.quantity} USD` : ''}</span>
      {remove}
    </li>
  );
};

CartItem.propTypes = propTypes;

export default CartItem;
