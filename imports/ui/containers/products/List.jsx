import React from 'react';
import { _ } from 'meteor/underscore';
import { compose, composeWithTracker } from 'react-komposer';
import Products from '../../../api/products/products.js';
import ProductList from '../../components/products/List.jsx';
import { store } from '../../redux/store.js';
import { Tracker } from 'meteor/tracker';

const onPropsChangeTracker = (props, onData) => {
  let subscription = Meteor.subscribe('products.list.with.catId', store.getState().category.catId);

  if (subscription.ready()) {
    const productIds = Products.find().fetch().map(product => product._id);
    onData(null, { productIds });
  }

  store.subscribe(() => {
    const state = store.getState().category;
    console.log("State is " , state);
    subscription = Meteor.subscribe('products.list.with.catId' , state.catId);

    // console.log("subscription.stop()", subscription.stop());
    // console.log("products here", Products.find().fetch());

    // Tracker.autorun(function(){
    //   console.log("subscription.stop", subscription.stop());
    //   console.log("products here", Products.find().fetch());
    //
    //   // subscription = Meteor.subscribe('products.list.with.catId' , state.catId);
    //
    // });

    // if (subscription.ready()) {
      // console.log("products here", Products.find().fetch());

      const productIds = Products.find( { catId: state.catId }).fetch().map(product => product._id);
      console.log("Product ids with the given category " , productIds);
        onData(null, { productIds });
    // }
  });

};

const ProductListContainer = composeWithTracker(onPropsChangeTracker)(ProductList);

export default ProductListContainer;
