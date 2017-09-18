import React from 'react';
import PropTypes from 'prop-types';

import styles from './SelectCategories.css';

const SelectCategories = ({ categories, handleChange }) => {
  const addDefaultCategory = () => {
    const cat = categories;
    const defaultCategory = {
      title: 'Selecione uma categoria',
      id: '0',
    };

    const newCategory = cat.slice();
    newCategory.splice(0, 0, defaultCategory);
    return newCategory;
  };
  return (
    <select className={styles.select} onChange={handleChange}>
      {
        categories &&
        addDefaultCategory().map(category => (
          <option
            key={`option-${category.id}`}
            value={category.id}
            name={category.title}
          >
            {category.title}
          </option>
        ))
      }
    </select>
  );
};

SelectCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
  })),
  handleChange: PropTypes.func.isRequired,
};

SelectCategories.defaultProps = {
  categories: [],
};

export default SelectCategories;
