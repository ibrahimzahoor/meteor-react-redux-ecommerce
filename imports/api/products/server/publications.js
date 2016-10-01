import { Meteor } from 'meteor/meteor';
import ProductsCollection from '../products.js';

Meteor.publish('products.list', function(){
  return ProductsCollection.find();
});
