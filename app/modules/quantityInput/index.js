import * as actions from './actions';

export const initialState = {
  totalItems: 0,
  totalPayment: 0,
};

const quantityInput = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.ADD_ITEM: {
      let payment = state.totalPayment + action.price;
      payment = payment.toFixed(2);
      return Object.assign({}, state, {
        totalItems: state.totalItems + 1,
        totalPayment: parseFloat(payment),
      });
    }

    case actions.REMOVE_ITEM: {
      let payment = state.totalPayment - action.price;
      payment = payment.toFixed(2);
      return Object.assign({}, state, {
        totalItems: state.totalItems - 1,
        totalPayment: parseFloat(payment),
      });
    }

    case actions.SET_QUANTITY: {
      let payment = state.totalPayment + (
        action.quantity * action.price
      );
      payment = payment.toFixed(2);
      return Object.assign({}, state, {
        totalItems: state.totalItems + action.quantity,
        totalPayment: parseFloat(payment),
      });
    }

    case actions.DECREMENT_BY_VALUE: {
      let payment = state.totalPayment - (
        action.quantity * action.price
      );
      payment = payment.toFixed(2);
      return Object.assign({}, state, {
        totalItems: state.totalItems - action.quantity,
        totalPayment: parseFloat(payment),
      });
    }

    default:
      return state;
  }
};
export default quantityInput;
export { actions };
