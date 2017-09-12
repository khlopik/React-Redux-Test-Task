import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    itemName: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
};

const defaultProps = {
    itemName: 'Items',
    price: 'Price',
    quantity: 0,
};

const BasketItem = (props) => {
    return (
        <li className="shop__basket-item">
            <span>{props.itemName}</span>
            <span>{props.price}</span>
            {props.quantity ?
                <input
                    className="shop__basket-counter"
                    type="number"
                    value={props.quantity}
                /> :
                <span>Quantity</span>
            }
            <span>{props.quantity? props.price * props.quantity : 'Total price'}</span>
        </li>
    );
};

BasketItem.propTypes = propTypes;
BasketItem.defaultProps = defaultProps;

export default BasketItem;
