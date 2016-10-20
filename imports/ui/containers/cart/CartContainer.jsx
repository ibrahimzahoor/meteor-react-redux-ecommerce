import { composeWithTracker } from 'react-komposer';
import Products from '../../../api/products/products.js';
import  CartItems from '../../components/cart/CartItems.jsx';
import { store } from '../../redux/store.js';


const composer = ( props, onData ) => {
  const subscription = Meteor.subscribe( 'products.list' );

  if ( subscription.ready() ) {
        var ids, products;
        if ( store.getState().cartItems.length !== 0){
            var cartObjects = store.getState().cartItems;
            var ids = [];
            cartObjects.forEach(function(cartItem) {
                ids.push(cartItem.id);
              });
            products = ProductsCollection.find({_id :{ $in : ids}}).fetch();
            products.forEach(function(product) {
                cartObjects.forEach(function(cartItem) {
                    if ( cartItem.id._str === product._id._str){
                      product.inCart = true;
                      product.quantity = cartItem.quantity;
                    }
                });
            });
        }
        else {
          products = ProductsCollection.find({name:"sss"}).fetch();
        }
        onData( null, { products } );

    } // subscription ready end
};

const CartContainer = composeWithTracker( composer )( CartItems );
export default CartContainer;
