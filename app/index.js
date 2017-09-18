import React from 'react';
import { render } from 'react-dom';
import { routes } from 'routes/router';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import quantityInput from 'modules/quantityInput';
import idFromPOC from 'modules/idFromPOC';
import searchField from 'modules/searchField';
import selectCategory from 'modules/selectCategory';
import geolocation from 'modules/geolocation';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

export const history = createBrowserHistory();

const networkInterface = createNetworkInterface({
  uri: 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql',
});
const client = new ApolloClient({
  networkInterface,
});

const reducers = combineReducers({
  quantityInput,
  idFromPOC,
  searchField,
  selectCategory,
  geolocation,
  apollo: client.reducer(),
});
const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(client.middleware()),
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);

const onRouteChange = (location) => {
  routes.resolve({
    path: location.pathname,
  }).then((result) => {
    render(
      <ApolloProvider store={store} client={client}>
        {result}
      </ApolloProvider>,
      document.getElementById('root'),
    );
  });
};

history.listen(onRouteChange);
onRouteChange(location);

