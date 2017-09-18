import * as actions from './actions';

export const initialState = {
  selectedValue: 0,
};

const selectCategory = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.GET_VALUE:
      return Object.assign({}, state.selectedValue);

    case actions.SET_VALUE:
      return Object.assign({}, state, { selectedValue: action.selectedValue });

    default:
      return state;
  }
};
export default selectCategory;
export { actions };
