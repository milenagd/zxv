import React from 'react';
import PropTypes from 'prop-types';

import AddIcon from 'icons/add-icon.svg';
import RemoveIcon from 'icons/remove-icon.svg';

const Button = ({ handleClick, value, className }) => (
  <button
    className={className}
    onClick={handleClick}
  >
    { value === '+' ? <AddIcon /> : <RemoveIcon /> }
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
