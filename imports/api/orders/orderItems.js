import { Mongo } from "meteor/mongo";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/*
 *  Order Item's Collection
 *  Will store the detials about ordered Items
 *  It will also handle changings in original collections
 */
 export const OrderItems = new Mongo.Collection('OrderItems');

 OrderItems.allow({
   insert: () => false,
   update: () => false,
   remove: () => false,
 });

 OrderItems.deny({
   insert: () => true,
   update: () => true,
   remove: () => true,
 });

 /*
  *  OrderItems Schema
  */
 OrderItems.schema = new SimpleSchema({
  _id: {
    type: String,
    label: "Order Item ID"
  },
  orderId: {
    type: String,
    label: "Order Item's Order ID",
    regEx: SimpleSchema.RegEx.Id,
    index: 1
  },
  variantId: {
    type:String,
    label:"Order Item's Variant ID",
    regEx: SimpleSchema.RegEx.Id,
    index:1
  },
  style: {
    type: String,
    label: "Order Item's Product Style",
    defaultValue: "none",
  },
  color: {
    type: String,
    label: "Order Item's Product Color",
    defaultValue: "none",
  },
  size: {
    type: String,
    label: "Order Item's Product Size",
    defaultValue: "none",
  },
  price: {
    type: Number,
    label: "Order Item's Price",
    defaultValue: 0,
  },
  quantity: {
    type: Number,
    label: "Order Item Quantity",
    defaultValue: 0,
  },

});

/*
 *  Attaching "OrderItems.Schema" to OrderItems Collection
 */
OrderItems.attachSchema(OrderItems.schema);
