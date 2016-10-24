import { Factory } from 'meteor/dburles:factory';
import Products from '../../api/products/products.js';

if(Products.find().fetch().length < 6)
  Factory.create('product');
