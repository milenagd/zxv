export const GET_VALUE = 'SEARCH_GET_VALUE';
export const SET_VALUE = 'SEARCH_SET_VALUE';

export const getSearchValue = () => ({
  type: GET_VALUE,
});

export const setSearchValue = value => ({
  type: SET_VALUE,
  value,
});
