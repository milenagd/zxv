import React from 'react';
import PropTypes from 'prop-types';

import SearchIcon from 'icons/search-icon.svg';

import styles from './InputAddress.css';

const InputAddress = ({ handleChange, handleClick, error, errorAddress }) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>
      Endereço de entrega</label>
    <div className={styles.searchBox}>
      <input
        onChange={handleChange}
        className={styles.input}
        type="text"
      />
      <button
        className={styles.button}
        onClick={handleClick}
      >
        <SearchIcon />
      </button>
    </div>
    { errorAddress &&
      <span className={styles.error}>
        * Nenhum resultado foi encontrado para este endereço.
      </span>
    }
    { error &&
      <span className={styles.error}>
        * Ocorreu um erro interno. Tenta novamente mais tarde.
      </span>
    }
  </div>
);

InputAddress.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  errorAddress: PropTypes.bool.isRequired,
};

export default InputAddress;
