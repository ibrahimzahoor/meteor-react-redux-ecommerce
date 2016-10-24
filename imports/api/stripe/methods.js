import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

// Connect to the Stripe API with the private token
// No need to declare StripeAPI, it is provided with mrgalaxy:stripe package
// (https://github.com/tyler-johnson/stripe-meteor/blob/master/stripe_server.js)
const stripe = StripeAPI(Meteor.settings.private.stripe);

// Define a processPayment method and passing an object 'charge'
// properties of the object will be amount, currency,
// source (unique token from Stripe to secure payment),
// description (name of the plan purchased), receipt_email (mail of the customer)
Meteor.methods({
  processPayment(charge) {
    check(charge, {
      amount: Number,
      currency: String,
      source: String,
      description: String,
      receipt_email: String,
    });

    // These lines are a little bit tricky, but TheMeteorChef have a very good explanation
    // to make it quick, it converts the stripe.charges.create (asynchronous Stripe method)
    // and the context (stripe.charges) to a synchronous function.
    // Have a look: https://themeteorchef.com/recipes/payments-with-stripe-checkout/
    const handleCharge = Meteor.wrapAsync(stripe.charges.create, stripe.charges);
    const payment = handleCharge(charge);

    return payment;
  },
});
