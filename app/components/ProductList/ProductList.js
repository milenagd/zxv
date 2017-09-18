import React from 'react';
import PropTypes from 'prop-types';

import ProductCardContainer from 'components/ProductCard';

import styles from './ProductList.css';

const ProductList = ({ data }) => {
  const poc = data.poc;
  return (
    <div className={styles.wrapper}>
      {
        poc && poc.products.length > 0
          ?
          poc.products.map((item, index) => (
            <ProductCardContainer
              key={`ProductCard-${index}`}
              title={item.productVariants[0].title}
              price={item.productVariants[0].price}
            />
          ))
          : null
      }
    </div>
  );
};

ProductList.propTypes = {
  data: PropTypes.object,
};

ProductList.defaultProps = {
  data: {},
};

export default ProductList;
