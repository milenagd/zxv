export const GET_ID = 'GET_ID';
export const SET_ID = 'SET_ID';
export const GET_TOTAL_PRODUCTS = 'GET_TOTAL_PRODUCTS';
export const SET_TOTAL_PRODUCTS = 'SET_TOTAL_PRODUCTS';

export const getId = () => ({
  type: GET_ID,
});

export const setId = id => ({
  type: SET_ID,
  id,
});

export const getTotalProducts = () => ({
  type: GET_TOTAL_PRODUCTS,
});

export const setTotalProducts = totalProducts => ({
  type: SET_TOTAL_PRODUCTS,
  totalProducts,
});
