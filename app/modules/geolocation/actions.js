export const SET_LOCATION = 'SET_LOCATION';
export const GET_LOCATION = 'GET_LOCATION';

export const setLocation = data => ({
  type: SET_LOCATION,
  lat: data.geometry.location.lat.toString(),
  lng: data.geometry.location.lng.toString(),
});
