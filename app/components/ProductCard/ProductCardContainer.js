import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as quantityInput from 'modules/quantityInput/actions';

import ProductCard from './ProductCard';

const mapDispatchToProps = {
  addItem: quantityInput.addItem,
  removeItem: quantityInput.removeItem,
  setQuantity: quantityInput.setQuantity,
  decrementValue: quantityInput.decrementValue,
};

class ProductCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }
  increment = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1,
    }));
    this.props.addItem(this.props.price);
  }
  decrement = () => {
    if (this.state.quantity > 0) {
      this.setState(prevState => ({
        quantity: prevState.quantity - 1,
      }));
      this.props.removeItem(this.props.price);
    }
  }
  handleChange = (event) => {
    const inputValue = event.target.value === ''
      ? 0 : parseInt(event.target.value, 10);

    if (inputValue !== this.state.quantity) {
      this.props.decrementValue(this.state.quantity, this.props.price);
      this.props.setQuantity(inputValue, this.props.price);
      this.setState({ quantity: inputValue });
    }
  }

  render() {
    return (
      <div>
        <ProductCard
          title={this.props.title}
          price={this.props.price}
          quantity={this.state.quantity}
          handleChange={this.handleChange}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}

ProductCardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  setQuantity: PropTypes.func.isRequired,
  decrementValue: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  mapDispatchToProps
)(ProductCardContainer);
