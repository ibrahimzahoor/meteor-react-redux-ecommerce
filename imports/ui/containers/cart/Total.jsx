import {compose} from 'react-komposer';
import Total from '../../components/cart/Total.jsx';
import {store} from '../../redux/store.js';
import {_} from "meteor/underscore";

const getSum = () => {
  let sum = 0;
  const cartItems = store.getState().cart.items ;
  if (cartItems.length !== 0) {
    const itemsSubTotal = cartItems.map(item => item.quantity * item.price);
    sum = _.reduce(itemsSubTotal, (memo, num) => memo + num);
  }
  return sum;
}

const composer = (props, onData) => {
  const sum = getSum();
  onData(null, {sum});
  store.subscribe(() => {
    const sum = getSum();
    onData(null, {sum});
  });
}

const TotalContainer = compose(composer)(Total);
export default TotalContainer;
