import React from 'react';
import PropTypes from 'prop-types';

import SearchIcon from 'icons/search-icon.svg';
import styles from './SearchField.css';

const SearchField = ({ handleBlur, handleClick }) => (
  <div className={styles.searchBox}>
    <input
      className={styles.input}
      type="text"
      onBlur={handleBlur}
    />
    <button
      className={styles.button}
      onClick={handleClick}
    >
      <SearchIcon />
    </button>
  </div>
);

SearchField.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SearchField;
