import { Meteor } from 'meteor/meteor';
import Products from '../products.js';

Meteor.publish('products.list', function(){
  return Products.find();
});
