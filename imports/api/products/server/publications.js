import { Meteor } from 'meteor/meteor';
import ProductsCollection from '../products.js';
import categoriesCollection from '../categories.js';

Meteor.publish('products.list', function(){
  return ProductsCollection.find();
});
Meteor.publish('categories.list', function(){
  return categoriesCollection.find();
});
