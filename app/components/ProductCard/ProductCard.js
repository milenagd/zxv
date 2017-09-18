import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import styles from './ProductCard.css';

const ProductCard = props => (
  <div className={styles.card}>
    <span className={styles.title}>{props.title}</span>
    <span className={styles.price}>R$ {props.price}</span>
    <div className={styles.quantity}>
      <input
        className={styles.input}
        type="number"
        value={props.quantity === 0 ? '' : props.quantity}
        onChange={props.handleChange}
      />
      <div>
        <Button
          className={`${styles.button} ${styles.buttonAddItem}`}
          value="+"
          handleClick={props.increment}
        />
        <Button
          className={`${styles.button} ${styles.buttonRemoveItem}`}
          value="-"
          handleClick={props.decrement}
        />
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default ProductCard;
