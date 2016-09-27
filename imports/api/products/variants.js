import { Mongo } from "meteor/mongo";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/*
*  Variants Collection
*  Store the Product's Variant information in this collection
*/
export const Variants = new Mongo.Collection('Variants');

// Variants.allow({
//   insert: () => false,
//   update: () => false,
//   remove: () => false,
// });
//
// Variants.deny({
//   insert: () => true,
//   update: () => true,
//   remove: () => true,
// });

/*
 *  Variants Schema
 */
Variants.schema = new SimpleSchema({
  _id: {
    type: String,
    label: "Variant ID"
  },
  productId: {
    type: String,
    label: "Variants Product ID",
    regEx: SimpleSchema.RegEx.Id,
    index: 1
  },
  style: {
    type: String,
    label: "Variants Product Style",
    optional: true,
    defaultValue: "none",
  },
  color: {
    type: String,
    label: "Variants Product Color",
    defaultValue: "none",
  },
  size: {
    type: String,
    label: "Variants Product Size",
    defaultValue: "none",
  },
  price: {
    type: Number,
    label: "Variant Price",
    defaultValue: 0,
  },
  changePrice: {
    type: Number,
    label: "Variant Change in Price",
    defaultValue: 0,
  },
  available: {
    type: Boolean,
    label: "Variant Availability",
    defaultValue: false,
  },
});

/*
 *  Attaching "Variants.Schema" to Variants Collection
 */
Variants.attachSchema(Variants.schema);
