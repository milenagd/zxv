import * as actions from './actions';

export const initialState = {
  id: 0,
  totalProducts: 0,
};

const idFromPOC = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.GET_ID:
      debugger;
      return Object.assign({}, state.id);

    case actions.SET_ID:
      return Object.assign({}, state, { id: action.id });

    case actions.GET_TOTAL_PRODUCTS:
      debugger;
      return Object.assign({}, state.totalProducts);

    case actions.SET_TOTAL_PRODUCTS:
      return Object.assign({}, state, { totalProducts: action.totalProducts });

    default:
      return state;
  }
};
export default idFromPOC;
export { actions };
