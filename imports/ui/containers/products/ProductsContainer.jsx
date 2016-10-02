import React from 'react';
import { _ } from 'meteor/underscore';
import { compose, composeWithTracker, composeAll } from 'react-komposer';
import ProductsCollection from '../../../api/products/products.js';
import  Products from '../../components/Products.jsx';
import { store } from '../../redux/store.js';

const composerFn1 = ( props, onData ) => {

  const subscription = Meteor.subscribe( 'products.list' );

  if ( subscription.ready() ) {
    const products = ProductsCollection.find().fetch();
    onData( null, { products } );
  }
};

const composerFn2 = ( props, onData ) => {

  onData(null, { products: props.products });

  return store.subscribe(() => {

    console.log("store.subscrib is called");

    let products = props.products;

    products.map(product => {
      const wishLish = store.getState().wishList;
      _.contains(wishLish, product._id._str) ? product.inWish = true : product.inWish = false;
      return product;
    });


   console.log("products after modification", products);
   let productCopy =  [];
   productCopy = productCopy.concat(products);
     console.log("productCopy", productCopy);

   onData( null, { productCopy } );
 });

};


export default composeAll(
  compose(composerFn2),
  composeWithTracker(composerFn1)
)(Products);
