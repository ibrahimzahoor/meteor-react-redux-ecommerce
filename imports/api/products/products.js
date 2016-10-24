import ChanceJS from 'chance';
import { Mongo } from "meteor/mongo";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Chance = new ChanceJS();

const Products = new Mongo.Collection('products');

// Products.allow({
//   insert: () => false,
//   update: () => false,
//   remove: () => false,
// });
//
// Products.deny({
//   insert: () => true,
//   update: () => true,
//   remove: () => true,
// });

/*
 *  Products Collection Schema
 */
Products.schema = new SimpleSchema({
  _id: {
    type: String,
    label: "Product ID"
  },
  src: {
    type: String,
    label: "Product Image",
    defaultValue:"/images/home/product1.jpg"
  },
  name: {
    type: String,
    label: "Product Name",
    max: 50
  },
  desc: {
    type: String,
    label: "Product Description",
    optional: true,
    max: 100
  },
  price: {
    type: Number,
    label: "Product Price",
  },
  available: {
    type: Boolean,
    label: "Product Availability",
    defaultValue: false
  },
});

Products.attachSchema(Products.schema);

export default Products;

Factory.define('product', Products, {
  name: () => Chance.string({pool: 'abcdefghijklmnopqrstuv' , length : 20}),
  desc: () => "",
  src: () => "",
  price: () => Chance.integer({min:1000 ,max:10000}),
  available: () => true,
});
