import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// route components
import App from '../../ui/layouts/App.jsx';
import HomePage from '../../ui/pages/Home.jsx';
import ProductsPage from '../../ui/pages/Products.jsx';
import NotFoundPage from '../../ui/pages/NotFound.jsx';

export const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute name="index" component={HomePage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
);
