import React from 'react';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import { productListQuery } from './productListQuery';

import ProductList from './ProductList';

const mapStateToProps = state => ({
  id: state.idFromPOC.id,
  totalProducts: state.idFromPOC.totalProducts,
  value: state.searchField.value,
  selectedValue: state.selectCategory.selectedValue,
});

export default compose(
  connect(mapStateToProps),
  graphql(productListQuery, {
    options: ownProps => ({
      variables: {
        id: ownProps.id,
        search: ownProps.value || '',
        categoryId: ownProps.selectedValue || 0,
      },
    }),
    skip: ({ id }) => id === undefined,
  })
)(ProductList);
