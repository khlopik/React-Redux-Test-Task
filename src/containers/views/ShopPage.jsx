import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import _ from 'lodash';

import Basket from '@/components/Basket/Basket';
import BasketItem from '@/components/Basket/BasketItem';

const test = [
    {itemName: 'item1', price: 20, count: 1},
    {itemName: 'item2', price: 30, count: 1},
];

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const items = test.length ? _.map(test, (item) => (
                <BasketItem
                    key={uuid()}
                    itemName={item.itemName}
                    price={item.price}
                    quantity={item.count}
                />
            )) : <p>No items added</p>

        return (
            <div>
                <Basket>
                    {items}
                </Basket>
            </div>
        );
    }
}

export default ShopPage;
