import React from 'react';
import { compose, composeAll, composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import Products from '../../../api/products/products.js';
import Product from '../../components/products/Product.jsx';
import { store } from '../../redux/store.js';

const productContainerComposer = (props, onData) => {

  let product = null;
  const subscription = Meteor.subscribe('product', props.productId);
  const cartItems = store.getState().cart.items.map(item => item.productId);

  if (subscription.ready()) {
    product = Products.findOne(props.productId);
    onData(null, { product, inCart: _.contains(cartItems, props.productId) });
  }

  store.subscribe(() => {
    const cartItems = store.getState().cart.items.map(item => item.productId);
    onData( null, { product, inCart: _.contains(cartItems, props.productId) } );
  });
};


const ProductContainer = composeWithTracker(productContainerComposer)(Product);
export default ProductContainer;
