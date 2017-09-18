export const GET_VALUE = 'SELECTED_GET_VALUE';
export const SET_VALUE = 'SELECTED_SET_VALUE';
export const DEFAULT_CATEGORY = 'DEFAULT_CATEGORY';

export const getSelectedValue = () => ({
  type: GET_VALUE,
});

export const setSelectedValue = selectedValue => ({
  type: SET_VALUE,
  selectedValue: parseInt(selectedValue, 10),
});
