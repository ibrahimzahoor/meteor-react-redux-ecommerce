import { composeWithTracker } from 'react-komposer';
import { Products as ProductsCollection } from '../../api/products/products.js';
import { Products as ProductsComponent } from '../../components/Products.jsx';

const composer = ( props, onData ) => {
  const subscription = Meteor.subscribe( 'products.list' );

  if ( subscription.ready() ) {
    const Products = ProductsCollection.find().fetch();
    onData( null, { Products } );
  }
};

const Container = composeWithTracker( composer )( ProductsComponent );
