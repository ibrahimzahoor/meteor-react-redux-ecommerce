import { compose } from 'react-komposer';
import CartItemList from '../../components/cart/ItemList.jsx';
import { store } from '../../redux/store.js';

const composer = ( props, onData ) => {
  const cartItemIds = store.getState().cart.items.map(item => item.productId);
  onData( null,{ cartItemIds });

  store.subscribe(() => {
    const cartItemIds = store.getState().cart.items.map(item => item.productId);
    onData(null,{ cartItemIds });
  });
}

const CartItemListContainer = compose(composer)(CartItemList);
export default CartItemListContainer;








  // const subscription = Meteor.subscribe( 'products.list' );
  // if ( subscription.ready() ) {
  //       var ids, products;
  //       if ( store.getState().cart.items.length !== 0){
  //           var cartObjects = store.getState().cart.items;
  //           // console.log("Cart Objects are ", cartObjects);
  //           var ids = [];
  //           cartObjects.forEach(function(cartItem) {
  //               ids.push(cartItem.productId);
  //             });
  //           products = Products.find({_id :{ $in : ids}}).fetch();
  //           // console.log("Products fetched according to list of ids " , products);
  //
  //           products.forEach(function(product) {
  //               cartObjects.forEach(function(cartItem) {
  //                 // console.log("Cart Item id is " , cartItem.productId);
  //                 // console.log("Product id from collection " , product._id);
  //
  //                   if ( cartItem.productId === product._id){
  //                     // console.log("ids matched in the cart container");
  //
  //                     product.inCart = true;
  //                     product.quantity = cartItem.quantity;
  //                   }
  //               });
  //           });
  //       }
  //       // else {
  //       //   products = Products.find({name:"sss"}).fetch();
  //       // }
  //       onData( null, { products } );
  //
  //   } // subscription ready end
// };
