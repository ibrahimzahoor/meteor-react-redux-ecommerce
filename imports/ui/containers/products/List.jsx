import React from 'react';
import { compose, composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { ReactiveVar } from 'meteor/reactive-var';
import { _ } from 'meteor/underscore';
import { store } from '../../redux/store.js';
import Products from '../../../api/products/products.js';
import ProductList from '../../components/products/List.jsx';

const onPropsChangeTracker = (props, onData) => {

  let subscription;
  let state = store.getState().category;
  let catId = new ReactiveVar(state.catId);

  if(subscription) {
    subscription.stop();
  }

  subscription = Meteor.subscribe('products.list.with.catId', catId.get());

  if(subscription.ready()) {
    let productIds = Products.find().fetch().map(product => product._id);
    onData(null, { productIds });
  }
  else {
    onData(null, { loading: true });
  }

  store.subscribe(() => {
    console.log("store.subscribe called");
    catId.set(store.getState().category.catId);
  });
};

const ProductListContainer = composeWithTracker(onPropsChangeTracker)(ProductList);
export default ProductListContainer;
