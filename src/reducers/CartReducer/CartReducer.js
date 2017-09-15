import { map } from 'lodash/map';

const cartReducer = (state = {
  cart: [],
  products: [
    { id: 1, productName: 'item1', price: 20 },
    { id: 2, productName: 'item2', price: 30 },
    { id: 3, productName: 'item3', price: 50 },
    { id: 4, productName: 'item4', price: 40 },
    { id: 5, productName: 'item5', price: 15 },
    { id: 6, productName: 'item6', price: 60 },
  ],
}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newState = _.filter(state.cart, ['id', action.payload]).length ?
      {
        ...state,
        cart: _.map(state.cart, (item) => {
          if (item.id !== action.payload) {
            return item;
          }
          return {
            ...item,
            quantity: _.filter(state.cart, ['id', action.payload])[0].quantity + 1,
          };
        }),
      } :
      {
        ...state,
        cart: [...state.cart, {
          id: action.payload,
          quantity: 1,
        }],
      };
      return newState;
    case 'CHANGE_ITEM_QUANTITY':
      return {
        ...state,
        cart: _.map(state.cart, (item) => {
          if (item.id !== action.payload.id) {
            return item;
          }
          return {
            ...item,
            quantity: action.payload.newQuantity,
          };
        }),
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: _.filter(state.cart, item => (item.id !== action.payload)),
      };
    default:
      return state;
  }
};

export default cartReducer;
