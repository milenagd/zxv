import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as searchField from 'modules/searchField/actions';

import SearchField from './SearchField';

const mapDispatchToProps = {
  setSearchValue: searchField.setSearchValue,
};

class SearchFieldContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleClick = () => {
    this.props.setSearchValue(this.state.value);
  }

  handleBlur = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <SearchField
          handleBlur={this.handleBlur}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

SearchFieldContainer.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  mapDispatchToProps
)(SearchFieldContainer);
