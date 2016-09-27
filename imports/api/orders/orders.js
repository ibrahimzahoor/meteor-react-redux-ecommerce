import { Mongo } from "meteor/mongo";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/*
*  Orders Collection
*  Store the Orders Detail in this collection
*/
export const Orders = new Mongo.Collection('Orders');

Orders.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Orders.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

/*
 *  Orders Schema
 */
Orders.schema = new SimpleSchema({
  _id: {
    type: String,
    label: "Order ID"
  },
  userId: {
    type: String,
    label: "User ID in Orders",
    regEx: SimpleSchema.RegEx.Id,
    index: 1
  },
  couponId: {
    type: String,
    label: "Coupon ID in Orders",
    regEx: SimpleSchema.RegEx.Id,
    index: 1
  },
  orderDate: {
    type: Date,
    label: "Order Date",
  },
  shipmentDate: {
    type: Date,
    label: "Shiment Date",
  },
  total: {
    type: Number,
    label: "Order Total",
    defaultValue: 0,
  },
});

/*
 *  Attaching "Orders.Schema" to Orders Collection
 */
Orders.attachSchema(Orders.schema);
