export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_QUANTITY = 'SET_QUANTITY';
export const DECREMENT_BY_VALUE = 'DECREMENT_BY_VALUE';

export const addItem = price => ({
  type: ADD_ITEM,
  price,
});

export const removeItem = price => ({
  type: REMOVE_ITEM,
  price,
});

export const setQuantity = (quantity, price) => ({
  type: SET_QUANTITY,
  quantity,
  price,
});

export const decrementValue = (quantity, price) => ({
  type: DECREMENT_BY_VALUE,
  quantity,
  price,
});
