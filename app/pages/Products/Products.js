import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from 'components/Header';
import SearchFieldContainer from 'components/SearchField';
import SelectCategoriesContainer from 'components/SelectCategories';
import ProductListContainer from 'components/ProductList';

import styles from './Products.css';

const mapStateToProps = state => ({
  totalItems: state.quantityInput.totalItems,
  totalPayment: state.quantityInput.totalPayment,
});

const Products = ({ totalItems, totalPayment }) => (
  <div>
    <Header />
    <div className={styles.wrapper}>
      <div className={styles.totalProducts}>
        <div>Produto(s) selecionado(s): {totalItems}</div>
        <div>Total: {totalPayment}</div>
      </div>
      <div className={styles.filters}>
        <SearchFieldContainer />
        <SelectCategoriesContainer />
      </div>
    </div>
    <ProductListContainer />
  </div>
);

Products.propTypes = {
  totalItems: PropTypes.number.isRequired,
  totalPayment: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
)(Products);

