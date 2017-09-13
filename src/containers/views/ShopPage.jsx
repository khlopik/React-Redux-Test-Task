import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { map, filter } from 'lodash';

import Cart from '@/components/Cart/Cart';
import CartItem from '@/components/Cart/CartItem';
import { addItemToCart, removeItemFromCart, changeItemQuantity } from '@/actions/basketActions';

import Product from '@/components/Product/Product';
import Products from '@/components/Product/Products';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let totalPrice = 0;
    const cartItems = this.props.cart.length ? _.map(this.props.cart, (item) => {
      totalPrice += _.filter(this.props.products, ['id', item.id])[0].price * item.quantity;
      return (
        <CartItem
          key={uuid()}
          cartItem={{
            ...item,
            id: item.id,
            itemName: _.filter(this.props.products, ['id', item.id])[0].productName,
            price: _.filter(this.props.products, ['id', item.id])[0].price,
          }}
          changeQuantity={this.props.changeQuantity}
          removeProduct={this.props.removeItem}
        />
      )}) : <p className="shop__no-items">No items added</p>;

    const products = _.map(this.props.products, (item) => (
      <Product
        key={uuid()}
        id={item.id}
        productName={item.productName}
        productPrice={item.price}
        addToCart={this.props.addItem}
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
  }
}

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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
