import { Mongo } from "meteor/mongo";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/*
*  Users Collection
*  Store the User's information in this collection
*/
export const Users = new Mongo.Collection('Users');

Users.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Users.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

/*
 *  Users Schema
 */
Users.schema = new SimpleSchema({
  _id: {
    type: String,
    label: "User ID"
  },
  name: {
    type: String,
    label: "User Name",
    max: 50
  },
  contact: {
    type: String,
    label: "User Contact",
    optional: true,
    max: 20
  },
  email: {
    type: String,
    label: "Email",
    regEx: SimpleSchema.RegEx.Email,
    optional:true
  }
  address: {
    type: String,
    label: "User Address",
    optional: true,
    max: 100
  },
  city: {
    type: String,
    label: "User City",
    optional: true,
    max: 50
  },
  country: {
    type: String,
    label: "User Country",
    optional: true,
    max: 100
  },
});

/*
 *  Attaching "Users.Schema" to Users Collection
 */
Users.attachSchema(Users.schema);
