import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';

import * as selectCategory from 'modules/selectCategory/actions';

import { allCategoriesQuery } from './allCategoriesQuery';
import SelectCategories from './SelectCategories';

const mapDispatchToProps = {
  setSelectedValue: selectCategory.setSelectedValue,
  addDefaultCategory: selectCategory.addDefaultCategory,
};

class SelectCategoriesContainer extends React.Component {
  handleChange = (event) => {
    this.props.setSelectedValue(event.target.value);
  }

  render() {
    return (
      <div>
        <SelectCategories
          categories={this.props.data && this.props.data.allCategory}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

SelectCategoriesContainer.propTypes = {
  data: PropTypes.object,
  setSelectedValue: PropTypes.func.isRequired,
};

SelectCategoriesContainer.defaultProps = {
  data: {},
};

export default(
  compose(
    graphql(allCategoriesQuery),
    connect(undefined, mapDispatchToProps)
  )
)(SelectCategoriesContainer);
