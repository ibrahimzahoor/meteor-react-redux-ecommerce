import { composeWithTracker } from 'react-komposer';
import { Products as ProductsCollection } from '../../../api/products/products.js';
import  Products    from '../../components/Products.jsx';
import { store } from '../../redux/store.js';


const composer = ( props, onData ) => {
  return store.subscribe(() => {
    const {cartItems} = store.getState();
    onData(null, {cartItems})
  });
};

// const composer = ( props, onData ) => {
//   const subscription = Meteor.subscribe( 'products.list' );
//
//   if ( subscription.ready() ) {
//     const Products = ProductsCollection.find().fetch();
//     onData( null, { Products } );
//   }
// };

const CartContainer = composeWithTracker( composer )( Products );
export default CartContainer;
