import React from 'react';
import {Meteor} from 'meteor/meteor';
import {compose} from 'react-komposer';
import {_} from 'meteor/underscore';
import {Tracker} from 'meteor/tracker';
import {ReactiveVar} from 'meteor/reactive-var';
import {store} from '../../redux/store.js';
import Products from '../../../api/products/products.js';
import ProductList from '../../components/products/List.jsx';
// import { EJSON } from 'meteor/ejson'

const onPropsChangeTracker = (props, onData) => {

  let productIds,
    subscription;
  let reactiveState = new ReactiveVar(store.getState().category);
  Tracker.autorun(function() {
    let state = reactiveState.get();
    subscription = Meteor.subscribe('products.list.with.catId', state);
    if (subscription.ready()) {
      if (state.catId) {
        if (state.maxPrice - state.minPrice > 0) {
          if (state.query.length !== 0) {
            console.log("Id and price range and query all found");
            productIds = Products.find({
              $and: [
                {
                  price: {
                    $gte: state.minPrice
                  }
                }, {
                  price: {
                    $lte: state.maxPrice
                  }
                }, {
                  catId: state.catId
                }, {
                  name: {
                    $regex: ".*" + state.query + ".*"
                  }
                }
              ]
            }).fetch().map(product => product._id);
          } else {
            console.log("Id and price range both found");
            productIds = Products.find({
              $and: [
                {
                  price: {
                    $gte: state.minPrice
                  }
                }, {
                  price: {
                    $lte: state.maxPrice
                  }
                }, {
                  catId: state.catId
                }
              ]
            }).fetch().map(product => product._id);
          }
        } else {
          if (state.query.length !== 0) {
            // console.log("Id and Query found");
            productIds = Products.find({
              $and: [
                {
                  name: {
                    $regex: ".*" + state.query + ".*"
                  }
                }, {
                  catId: state.catId
                }
              ]
            }).fetch().map(product => product._id);
          } else {
            // console.log("Only Id found");
            productIds = Products.find({catId: state.catId}).fetch().map(product => product._id);
          }
        }
      } else if (state.maxPrice - state.minPrice > 0) {
        if (state.query.length !== 0) {
          // console.log("No Id but Price range and query found");
          productIds = Products.find({
            $and: [
              {
                name: {
                  $regex: ".*" + state.query + ".*"
                }
              }, {
                price: {
                  $gte: state.minPrice
                }
              }, {
                price: {
                  $lte: state.maxPrice
                }
              }
            ]
          }).fetch().map(product => product._id);

        } else {
          // console.log("Only Price Range Found");
          productIds = Products.find({
            $and: [
              {
                price: {
                  $gte: state.minPrice
                }
              }, {
                price: {
                  $lte: state.maxPrice
                }
              }
            ]
          }).fetch().map(product => product._id);
        }
      } else if (state.query.length !== 0) {
        // console.log("Only query found");
        productIds = Products.find({
          name: {
            $regex: ".*" + state.query + ".*"
          }
        }).fetch().map(product => product._id);
      } else {
        // console.log("Nothing found");
        productIds = Products.find().fetch().map(product => product._id);
      }
      onData(null, {productIds});
    } else {
      onData(null, {productIds: []});
    }
  });
  store.subscribe(() => {
    reactiveState.set(store.getState().category);
  });

};

const ProductListContainer = compose(onPropsChangeTracker)(ProductList);
export default ProductListContainer;






































































// const subscription = Meteor.subscribe('products.list');
// let state =  store.getState().category;
// let productIds;
// Tracker.autorun(function(){
//   if (subscription.ready())
//   {
//     Tracker.nonreactive(function(){
//       productIds = Products.find().fetch().map(product => product._id);
//     });
//     console.log("Product ids are " , productIds);
//     onData(null, { productIds });
//   }
//   else {
//     onData(null, { productIds: [] });
//   }
// });
// Tracker.autorun(function(){
//   store.subscribe(() => {
//     state =  store.getState().category;
//     if (state.catId){
//       Tracker.nonreactive(function(){
//         productIds = Products.find({catId: state.catId}).fetch().map(product => product._id);
//       });
//       console.log("cat id is " , state.catId);
//       console.log("New products with the category Id " , productIds);
//       onData(null, { productIds });
//     }
//   });
// });

// let productIds, subscription;
// let catId = new ReactiveVar(0);
//
// Tracker.autorun(function(){
//   console.log("Tracker auto runs called");
//   subscription = Meteor.subscribe('products.list.with.catId', catId.get());
//   if(subscription.ready()) {
//     console.log("subscription ready true");
//     Tracker.nonreactive(function(){
//        productIds = Products.find().fetch().map(product => product._id);
//     });
//     onData(null, { productIds });
//   }
//   else {
//     onData(null, { productIds:[] });
//   }
// });
// store.subscribe(() => {
//   catId.set(store.getState().category.catId);
// });

// let subscription;
// let state = store.getState().category;
// let catId = new ReactiveVar(state.catId);
//
// if(subscription) {
//   subscription.stop();
// }
//
// subscription = Meteor.subscribe('products.list.with.catId', catId.get());
//
// if(subscription.ready()) {
//   let productIds = Products.find().fetch().map(product => product._id);
//   onData(null, { productIds });
// }
// else {
//   onData(null, { loading: true });
// }
//
// store.subscribe(() => {
//   console.log("store.subscribe called");
//   catId.set(store.getState().category.catId);
// });
