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
    console.log("Id found");
    return Products.find({
    catId: Id
    }, {
      fields: { _id: 1 }
    });
  }
  else {
    console.log("Id Not Found");
    return Products.find({
      }, {
        fields: { _id: 1 }
    });
  }
});

Meteor.publish('product', (productId) => {
  return Products.find(productId);
});
