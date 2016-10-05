import React from 'react';
import ReactDOM from 'react-dom';
import CartContainer  from '../containers/products/CartContainer';



/*
 * Cart Page that will dispay
 * Cart Header
 * Cart Component
 * Cart Footer
 */
class CartPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (<CartContainer />);
    }
}
export default CartPage;
