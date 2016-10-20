import React from 'react';
// import { _ } from 'meteor/underscore';
import {compose, composeWithTracker} from 'react-komposer';
import ProductsCollection from '../../../api/products/products.js';
import Products from '../../components/Products.jsx';
import {store} from '../../redux/store.js';

const ProductsComposer = (props, onData) => {
  const subscription = Meteor.subscribe('products.list');
  if (subscription.ready()) {
      // console.log("Product Container Called n subscription ready");
    var products;
    var subIds = store.getState().category.subIds;
    if ( subIds && subIds.length !== 0 ){
      if (store.getState().category.price){
        products = ProductsCollection.find({$and : [{catId :{ $in : subIds}} , {unitPrice: { $lte : store.getState().category.price}}]}).fetch();
      }
      else{
      products = ProductsCollection.find({catId :{ $in : subIds}}).fetch();
      }
    }
    else if ( store.getState().category.Id !== 0){
      if (store.getState().category.price){
        products = ProductsCollection.find({$and : [{catId:store.getState().category.Id} , {unitPrice: { $lte : store.getState().category.price}}]}).fetch();
      }
      else{
        products = ProductsCollection.find({catId:store.getState().category.Id}).fetch();
      }
    }
    else{
      if (store.getState().category.price){
        products = ProductsCollection.find({unitPrice: { $lte : store.getState().category.price}}).fetch();
      }
      else{
        products = ProductsCollection.find().fetch();
      }

    }

    // this was the old version of the product container

    if (store.getState().cartItems.length !== 0) {
      var cartObjects = store.getState().cartItems;
      products.forEach(function(product) {
        cartObjects.forEach(function(cartItem) {
          if (product._id._str == cartItem.id._str) {
            product.inCart = true;
          }
        });
      });
    }
    
    onData(null, {products});
  }

};
const ProductsContainer = composeWithTracker(ProductsComposer)(Products);
export default ProductsContainer;

// const composerFn1 = ( props, onData ) => {
//
//   const subscription = Meteor.subscribe( 'products.list' );
//
//   if ( subscription.ready() ) {
//     const products = ProductsCollection.find().fetch();
//     onData( null, { products } );
//   }
// };
//
// const composerFn2 = ( props, onData ) => {
//
//   onData(null, { products: props.products });
//
//   return store.subscribe(() => {
//
//     console.log("store.subscrib is called");
//
//     let products = props.products;
//
//     products.map(product => {
//       const wishLish = store.getState().wishList;
//       _.contains(wishLish, product._id._str) ? product.inWish = true : product.inWish = false;
//       return product;
//     });
//
//
//    console.log("products after modification", products);
//    let productCopy =  [];
//    products = productCopy.concat(products);
//      console.log("productCopy", productCopy);
//
//    onData( null, { products: productCopy } );
//  });
//
// };
//
//
// export default composeAll(
//   compose(composerFn2),
//   composeWithTracker(composerFn1)
// )(Products);
