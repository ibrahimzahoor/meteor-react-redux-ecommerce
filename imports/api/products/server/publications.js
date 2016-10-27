import {
  Meteor
} from 'meteor/meteor';
import Products from '../products.js';

Meteor.publish('products.list', () => {
  return Products.find({}, {
    fields: {
      _id: 1
    }
  });
});
Meteor.publish('products.list.with.catId', (state) => {
  if (state.catId) {
    if (state.maxPrice - state.minPrice > 0) {
      if (state.query.length !== 0) {
        console.log("Id and price range and query all found");
        return Products.find({});
      } else {
        console.log("Id and price range both found");
        return Products.find({
          $and: [{
            price: {
              $gte: state.minPrice
            }
          }, {
            price: {
              $lte: state.maxPrice
            }
          }, {
            catId: state.catId
          }]
        });
      }
    } else {
      if (state.query.length !== 0) {
        console.log("Id and query found");
        return Products.find({});
      } else {
        console.log("Only Id found");
        return Products.find({
          catId: state.catId
        });
      }
    }
  } else if (state.maxPrice - state.minPrice > 0) {
    if (state.query.length !== 0) {
      console.log("No Id but Price range and query found");
      return Products.find({});
    } else {
      console.log("No Id but only Price range found");
      return Products.find({
        $and: [{
          price: {
            $gte: state.minPrice
          }
        }, {
          price: {
            $lte: state.maxPrice
          }
        }]
      });
    }
  } else {
    console.log("Neither Id nor Price Range found");
    return Products.find({});
  }
});



Meteor.publish('product', (productId) => {
  return Products.find(productId);
});
