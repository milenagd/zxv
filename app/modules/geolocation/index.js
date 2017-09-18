import * as actions from './actions';

export const initialState = {
  lat: '0',
  lng: '0',
};

const geolocation = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.SET_LOCATION:
      return Object.assign({}, state, {
        lat: action.lat,
        lng: action.lng,
      });

    default:
      return state;
  }
};
export default geolocation;
export { actions };
