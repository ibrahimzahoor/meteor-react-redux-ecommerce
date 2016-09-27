import { Mongo } from "meteor/mongo";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/*
 *  Products Collection
 *  Store the Products in this collection
 */
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
 *  Products Schema
 */
Products.schema = new SimpleSchema({
  _id: {
    type: String,
    label: "Product ID"
  },
  name: {
    type: String,
    label: "Product Name",
    max: 50
  },
  description: {
    type: String,
    label: "Product Description",
    optional: true,
    max: 100
  },
  unitPrice: {
    type: Number,
    label: "Product Price",
  },
  available: {
    type: Boolean,
    label: "Product Availability",
    defaultValue: false
  },
});

/*
 *  Attaching "Products.schema" to Products Collection
 */
Products.attachSchema(Products.schema);

/*
 *  exporting Products Collection
 */
export default Products;
