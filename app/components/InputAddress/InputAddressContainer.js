import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';

import moment from 'moment';
import { history } from 'app';

import * as idFromPOC from 'modules/idFromPOC/actions';
import * as geolocation from 'modules/geolocation/actions';
import { searchMethod } from './inputAddressQuery';
import InputAddress from './InputAddress';

const mapStateToProps = state => ({
  id: state.idFromPOC.id,
  totalProducts: state.idFromPOC.totalProducts,
  lat: state.geolocation.lat,
  lng: state.geolocation.lng,
});

const mapDispatchToProps = {
  setId: idFromPOC.setId,
  setTotalProducts: idFromPOC.setTotalProducts,
  setLocation: geolocation.setLocation,
};

class InputAddressContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: false,
      errorAddress: false,
    };
  }
  handleClick = () => {
    // const pocSearchElement = this.props.data.pocSearch.find(
    //   element => element.status === 'AVAILABLE'
    // );
    const pocSearchElement = this.props.data.pocSearch[1];
    if (pocSearchElement) {
      this.props.setId(pocSearchElement.id);
      this.props.setTotalProducts(
        pocSearchElement.deliveryTypes.length
      );
      history.push('/products');
    } else {
      this.setState({
        errorAddress: true,
      });
    }
  }

  handleChange = (event) => {
    const address = event.target.value;
    this.findLocation(address);
  }

  findLocation = (addressInfo) => {
    let address = addressInfo.replace(/[,|" "]/g, '+');
    address = address.toLowerCase();
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCRnLQu7ukPd_TsQ2JLTtdfmFtDtHLjpU0`;
    fetch(url)
      .then(
        (response) => {
          if (response.status !== 200) {
            this.setState({
              error: true,
            });
            return;
          }
          response.json().then((data) => {
            this.props.setLocation(data.results[0]);
          });
        }
      )
      .catch((err) => {
        console.log(err);
        this.setState({
          error: true,
        });
        return null;
      });
  };

  render() {
    return (
      <div>
        <InputAddress
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          error={this.state.error}
          errorAddress={this.state.errorAddress}
        />
      </div>
    );
  }
}

InputAddressContainer.propTypes = {
  setId: PropTypes.func.isRequired,
  setTotalProducts: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
  data: PropTypes.object,
};

InputAddressContainer.defaultProps = {
  data: null,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  graphql(searchMethod, {
    options: ownProps => ({
      variables: {
        now: moment().format(),
        algorithm: 'NEAREST',
        lat: ownProps.lat || '0',
        long: ownProps.lng || '0',
      },
    }),
  }),
)(InputAddressContainer);
