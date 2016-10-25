import { Meteor } from 'meteor/meteor';
import categoriesCollection from '../categories.js';

Meteor.publish('categories.list', function(){
  return categoriesCollection.find();
});
