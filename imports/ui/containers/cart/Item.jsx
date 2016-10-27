import React from 'react';
import { compose, composeAll, composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import Products from '../../../api/products/products.js';
import CartItem from '../../components/cart/Item.jsx';
import { store } from '../../redux/store.js';

const composer = (props, onData) => {
  console.log("Cart Item container called ");

  let product = null;
  const subscription = Meteor.subscribe('product', props.productId);

  const cartItems = store.getState().cart.items;
  const item = _.find(cartItems, item => props.productId === item.productId );

  if (subscription.ready()) {
    product = Products.findOne(props.productId);
    onData(null,{ product, quantity: item.quantity });
  }

  store.subscribe(() => {
    product = Products.findOne(props.productId);
    onData(null,{ product, quantity: item.quantity });
  });

};

const CartItemContainer = composeWithTracker(composer)(CartItem);
export default CartItemContainer;
