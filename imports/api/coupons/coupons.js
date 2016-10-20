import { Mongo } from "meteor/mongo";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/*
 *  Coupon's Collection
 *  Will store the detials about coupons
 */
expor const Coupons = new Mongo.Collection('Coupons');

Coupons.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Coupons.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

/*
 *  Coupons Schema
 */
Coupons.schema = new SimpleSchema({
  _id: {
    type: String,
    label: "Coupon ID"
  },
  expiryDate: {
    type: Date,
    label: "Coupon Expiry",
  },
  allowedUser: {
    type:Number,
    label: "User Allowed on Coupon",
    defaultValue: 0
  },
  discount: {
    type: Number,
    label: "Discount on Coupon"
  }
});

/*
 *  Attaching "Coupons.Schema" to Coupons Collection
 */
Coupons.attachSchema(Coupons.schema);
