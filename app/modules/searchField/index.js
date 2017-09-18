import * as actions from './actions';

export const initialState = {
  value: '',
};

const searchField = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.GET_VALUE:
      return Object.assign({}, state.value);

    case actions.SET_VALUE:
      return Object.assign({}, state, { value: action.value });

    default:
      return state;
  }
};
export default searchField;
export { actions };
