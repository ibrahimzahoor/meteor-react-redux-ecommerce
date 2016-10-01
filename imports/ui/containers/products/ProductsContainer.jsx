import React from 'react';
import { compose, composeWithTracker } from 'react-komposer';
import ProductsCollection from '../../../api/products/products.js';
import  Products from '../../components/Products.jsx';
import { store } from '../../redux/store.js';

// this will get the data from store
// const composer = ( props, onData ) => {
//   return store.subscribe(() => {
//     const {cartItems} = store.getState();
//     onData(null, {cartItems})
//   });
// };

const composerFn1 = ( props, onData ) => {
  const subscription = Meteor.subscribe( 'products.list' );

  if ( subscription.ready() ) {
     const products = ProductsCollection.find().fetch();
    // console.log("Store" , store.getState().wishList);
    onData( null, { products } );
  }
};

const composerFn2 = ( props, onData ) => {

  // const onPropsChange = (props, onData) => {
  //   onData(null, {time: store.getState().time});
  //   return store.subscribe(() => {
  //     const {time} = store.getState();
  //     onData(null, {time})
  //   });
  // };

  return store.subscribe(() => {

  console.log("store.subscrib is called");
 //
//  products.map(product => {
//    store.getState().wishList.forEach(wishListProductId => {
//      console.log("product", product);
//      console.log("wishListProductId", wishListProductId);
 //
//      if(wishListProductId == product._id._str) {
//        product = {...product, inWish: true };
//        console.log("product changed", product);
//        return product;
//      }
//    });
//    return product;
//  });

 console.log("products.map(product => {", products);


 let i = 0 ;
 for (const value of products) {
   for ( const wishValue of store.getState().wishList){
     if ( wishValue === value._id._str){
       console.log("Wish Value Matched" , wishValue);
       products[i].inWish = true;
        // {...products, inWish: true }
     }
   }
   i++;
  //  console.log(value._id._str);
 }

 console.log("products.map(product => {", products);


 //console.log("Store Subscibed and Products are..." , products);
 // console.log("ID is " , products[0]._id._str);
 // products[0].saad = "hello hello";
 //  let change = Math.random();

// let productJunk =  [];
// productJunk = productJunk.concat(products);
//   console.log("productJunk", productJunk);

 onData( null, { products } );
});


const Clock = compose(onPropsChange)(Time);
export default composeAll(
  composeWithObservable(composerFn1),
  composeWithTracker(composerFn2)
)(Time)
const ProductsContainer = compose( composer )( Products );
export default ProductsContainer;
