import { Mongo } from "meteor/mongo";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/*
 *  ProductsCollection Collection
 *  Store the ProductsCollection in this collection
 */
const ProductsCollection = new Mongo.Collection('products');

// ProductsCollection.allow({
//   insert: () => false,
//   update: () => false,
//   remove: () => false,
// });
//
// ProductsCollection.deny({
//   insert: () => true,
//   update: () => true,
//   remove: () => true,
// });

/*
 *  ProductsCollection Schema
 */
ProductsCollection.schema = new SimpleSchema({
  _id: {
    type: String,
    label: "Product ID"
  },
  src: {
    type: String,
    label: "Product Image",
    max: 50,
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
 *  Attaching "ProductsCollection.schema" to ProductsCollection Collection
 */
ProductsCollection.attachSchema(ProductsCollection.schema);

/*
 *  exporting ProductsCollection Collection
 */
export default ProductsCollection;
