import { Meteor } from 'meteor/meteor';
import Products from '../products.js';

Meteor.publish('products.list', () => {
  return Products.find({
    }, {
      fields: { _id: 1 }
    });
});

Meteor.publish('product', (productId) => {
  return Products.find(productId);
});
