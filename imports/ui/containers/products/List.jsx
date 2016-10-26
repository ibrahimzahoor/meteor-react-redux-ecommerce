import React from 'react';
import {Meteor} from 'meteor/meteor';
import {ReactiveVar} from 'meteor/reactive-var';
import {_} from 'meteor/underscore';
import {compose, composeWithTracker} from 'react-komposer';
import Products from '../../../api/products/products.js';
import ProductList from '../../components/products/List.jsx';
import {store} from '../../redux/store.js';
import {Tracker} from 'meteor/tracker';

const onPropsChangeTracker = (props, onData) => {
  let subscription;

  let catId = new ReactiveVar();
  catId.set(0);

  console.log("catId", catId);

  subscription = Meteor.subscribe('products.list.with.catId', catId.get());

  // console.log("sub", subscription);
  // console.log("products here", Products.find().fetch());

  if(subscription.ready()) {
    console.log("subscription ready called");
    const productIds = Products.find().fetch().map(product => product._id);
    onData(null, { productIds });
  }
  //
  // store.subscribe(() => {
  //   const state = store.getState().category;
  //   // subscription.stop();
  //   catId.set(state.catId);
  //   console.log("State is " , state);
  //   // subscription = Meteor.subscribe('products.list.with.catId' , state.catId);
  //
  //   // Tracker.autorun(function(){
  //   //   console.log("subscription.stop", subscription.stop());
  //   //   console.log("products here", Products.find().fetch());
  //   //   // subscription = Meteor.subscribe('products.list.with.catId' , state.catId);
  //   // });
  //
  //   // if (subscription.ready()) {
  //     // console.log("products here", Products.find().fetch());
  //     // const productIds = Products.find( { catId: state.catId }).fetch().map(product => product._id);
  //     // console.log("Product ids with the given category " , productIds);
  //     //   onData(null, { productIds });
  //   // }
  // });
};

const ProductListContainer = composeWithTracker(onPropsChangeTracker)(ProductList);

export default ProductListContainer;
