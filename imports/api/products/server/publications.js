import { Meteor } from 'meteor/meteor';
import Products from '../products.js';

Meteor.publish('products.list', () => {
  return Products.find({
    }, {
      fields: { _id: 1 }
    });
});
Meteor.publish('products.list.with.catId', (Id) => {
  if (!!Id){

    return Products.find({
    catId: Id
    }, {
      fields: { _id: 1 }
    });
  }
  else {
    return Products.find({
      }, {
        fields: { _id: 1 }
    });
  }
});

Meteor.publish('product', (productId) => {
  return Products.find(productId);
});
