import React from 'react';
import { map } from 'lodash/map';

import CartItem from '@/components/Cart/CartItem';
import './Cart.scss';

const Cart = (props) => {
    return (
        <div className="shop__cart">
            <h2 className="shop__cart-title">Cart</h2>
            <ul className="shop__cart-list">
                <CartItem/>
                {props.children}
              <li className="shop__cart-total">{`Total amount: ${props.totalPrice} USD`}</li>
            </ul>

        </div>
    );
};

export default Cart;
