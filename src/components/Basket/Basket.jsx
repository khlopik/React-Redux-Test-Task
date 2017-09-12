import React from 'react';
import uuid from 'uuid';
import { map } from 'lodash/map';

import BasketItem from '@/components/Basket/BasketItem';
import './Basket.scss';

const Basket = (props) => {
    return (
        <div className="shop__basket">
            <h2 className="shop__basket-title">Cart</h2>
            <ul className="shop__basket-list">
                <BasketItem/>
                {props.children}
            </ul>
        </div>
    );
};

export default Basket;
