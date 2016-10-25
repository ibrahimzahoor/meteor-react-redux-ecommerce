import { Mongo } from "meteor/mongo";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/*
 *  categoriesCollection Collection
 *  Store the categoriesCollection in this collection
 */
const categoriesCollection = new Mongo.Collection('categories');

// categoriesCollection.allow({
//   insert: () => false,
//   update: () => false,
//   remove: () => false,
// });
//
// categoriesCollection.deny({
//   insert: () => true,
//   update: () => true,
//   remove: () => true,
// });

/*
 *  categoriesCollection Schema
 */
categoriesCollection.schema = new SimpleSchema({
  _id: {
    type: String,
    label: "categories ID"
  },
  name: {
    type: String,
    label: "Product Name",
    max: 50
  },
  parentId: {
    type: String,
    label: "Category Parent ID",
    optional: true
  },
});

/*
 *  Attaching "categoriesCollection.schema" to categoriesCollection Collection
 */
categoriesCollection.attachSchema(categoriesCollection.schema);

/*
 *  exporting categoriesCollection Collection
 */
export default categoriesCollection;
