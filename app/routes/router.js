import Router from 'universal-router';
import React from 'react';
import Home from 'pages/Home';
import Products from 'pages/Products';
import NotFound from 'pages/NotFound';

export const routes = new Router([
  {
    path: '/',
    action: () => <Home />,
  },
  {
    path: '/products',
    action: () => <Products />,
  },
  {
    paths: '*',
    action: () => <NotFound />,
  },
]);
