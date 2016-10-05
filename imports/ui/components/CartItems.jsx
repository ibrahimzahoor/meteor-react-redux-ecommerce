import React from 'react';
import SingleCartItem  from './SingleCartItem';
import { store } from '../redux/store.js';


 class CartItems extends React.Component{
   constructor(props){
     super(props);
   }
   renderTasks() {
    return this.props.products.map((obj) => (
      <SingleCartItem
        key = {obj._id._str}
        id = {obj._id._str}
        src = {obj.src}
        name = {obj.name}
        price = {obj.unitPrice}
        inCart = {obj.inCart}
        quantity={obj.quantity}
        />
    ));
    }

   render(){
    return (
      <section id="cart_items">
         <div className="container">
           <div className="breadcrumbs">
             <ol className="breadcrumb">
               <li><a href="#">Home</a></li>
               <li className="active">Shopping Cart</li>
             </ol>
           </div>
           <div className="table-responsive cart_info">
             <table className="table table-condensed">
               <thead>
                 <tr className="cart_menu">
                   <td className="image">Item</td>
                   <td className="description"></td>
                   <td className="price">Price</td>
                   <td className="quantity">Quantity</td>
                   <td className="total">Total</td>
                   <td></td>
                 </tr>
               </thead>
               <tbody>
                {this.renderTasks()}
               </tbody>
             </table>
           </div>
         </div>
       </section>
     );
   }
 }
 export default CartItems;
