import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { map, filter } from 'lodash';

import Cart from '@/components/Cart/Cart';
import CartItem from '@/components/Cart/CartItem';
import { addItemToCart, removeItemFromCart, changeItemQuantity } from '@/actions/basketActions';

import Product from '@/components/Product/Product';
import Products from '@/components/Product/Products';

const propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addItem: PropTypes.func.isRequired,
  changeQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

const ShopPage = (props) => {
  let totalPrice = 0;
  const cartItems = props.cart.length ? _.map(props.cart, (item) => {
    totalPrice += _.filter(props.products, ['id', item.id])[0].price * (item.quantity ? item.quantity : 0);
    return (
      <CartItem
        key={item.id}
        cartItem={{
          ...item,
          id: item.id,
          itemName: _.filter(props.products, ['id', item.id])[0].productName,
          price: _.filter(props.products, ['id', item.id])[0].price,
        }}
        changeQuantity={props.changeQuantity}
        removeProduct={props.removeItem}
      />
    );
  }) : <p className="shop__no-items">No items added</p>;

  const products = _.map(props.products, item => (
    <Product
      key={uuid()}
      id={item.id}
      productName={item.productName}
      productPrice={item.price}
      addToCart={props.addItem}
    />
  ));

  return (
    <div>
      <Cart totalPrice={totalPrice}>
        {cartItems}
      </Cart>
      <Products>
        {products}
      </Products>
    </div>
  );
};


const mapStateToProps = state => ({
  cart: state.cartReducer.cart,
  products: state.cartReducer.products,
});

const mapDispatchToProps = dispatch => ({
  addItem: (id) => {
    dispatch(addItemToCart(id));
  },
  removeItem: (id) => {
    dispatch(removeItemFromCart(id));
  },
  changeQuantity: (id, newQuantity) => {
    dispatch(changeItemQuantity(id, newQuantity));
  },
});

ShopPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
