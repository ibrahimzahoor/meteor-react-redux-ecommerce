import React from 'react';
import ReactDOM from 'react-dom';
import  Cart  from '../components/Cart';


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
    return (<Cart />);
    }
}
export default CartPage;
