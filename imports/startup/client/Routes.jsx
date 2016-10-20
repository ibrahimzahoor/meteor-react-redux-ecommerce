import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from '../../ui/layouts/App.jsx';
import HomePage from '../../ui/pages/Home.jsx';
// import ProductsPage from '../../ui/pages/Products.jsx';
import CartPage from '../../ui/pages/Cart.jsx';
import NotFoundPage from '../../ui/pages/NotFound.jsx';

export const Routes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute name="index" component={ HomePage } />
      {/* <Route path="/search" component={ SearchPage } /> */}
      <Route path="/cart" component={ CartPage } />
      <Route path="*" component={ NotFoundPage } />
    </Route>
  </Router>
);
