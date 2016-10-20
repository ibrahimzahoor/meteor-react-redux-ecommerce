import React from 'react';
import { _ } from 'meteor/underscore';
import { compose, composeWithTracker } from 'react-komposer';
import Products from '../../../api/products/products.js';
import ProductList from '../../components/products/List.jsx';

const onPropsChangeTracker = (props, onData) => {
  const subscription = Meteor.subscribe('products.list');

  if (subscription.ready()) {
    const productIds = Products.find().fetch().map(product => product._id);

    onData(null, { productIds });
  }
};

const ProductListContainer = composeWithTracker(onPropsChangeTracker)(ProductList);

export default ProductListContainer;
