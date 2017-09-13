export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY';

export const addItemToCart = id => ({
  type: ADD_ITEM,
  payload: id,
});

export const removeItemFromCart = id => ({
  type: REMOVE_ITEM,
  payload: id,
});

export const changeItemQuantity = (id, newQuantity) => ({
  type: CHANGE_ITEM_QUANTITY,
  payload: {
    id,
    newQuantity,
  },
});
