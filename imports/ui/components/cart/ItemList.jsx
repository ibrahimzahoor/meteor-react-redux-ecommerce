import React from 'react';
import { store } from '../../redux/store.js';
import CartItemContainer from "../../containers/cart/Item";
import TotalContainer from "../../containers/cart/Total";


class CartItemList extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       itemsAddedToCart: 0,
       total:0,
     };
   }
   renderTasks() {
     return this.props.cartItemIds.map((itemId) => (
        <CartItemContainer
          key = { itemId }
          productId = { itemId }
          />
        ));
    }

   render(){
       var setWidth = {
       width:"10px"
     };
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
             <table  className="table table-condensed">
               {store.getState().cart.items.length !== 0 ?
               <thead>
                 <tr className="cart_menu">
                   <td className="image">Item</td>
                   <td className="description"></td>
                   <td className="price">Price</td>
                   <td className="quantity">Quantity</td>
                   <td className="total">Total</td>
                   <td></td>
                 </tr>
               </thead> : <tbody><tr></tr></tbody> }
               <tbody>
                {this.renderTasks()}
                {store.getState().cart.items.length !== 0 ?  <TotalContainer  /> :

                  <tr className="text-center">
                    <td>
                      <h5>No Items have been added to the cart
                      </h5>
                    </td>
                  </tr>

                }

               </tbody>
             </table>
           </div>
         </div>
       </section>
     );
   }
 }
 export default CartItemList;








 // shouldComponentUpdate(){
 //   this.setState({
 //     itemsAddedToCart: store.getState().items,
 //     total:store.getState().cartItemsTotalAmount
 //   });
 //   return true;
 // }
 // componentWillReceiveProps(nextProps){
 //    console.log("Props are changed in Cart Item"  , nextProps );
 // }
 // componentWillMount(){
 //   this.setState({
 //     itemsAddedToCart: store.getState().items,
 //     total:store.getState().cartItemsTotalAmount
 //    });
 // }
 // calculateTotal(totalAmount , totalItems){
 //   this.setState({
 //     total: totalAmount,
 //     itemsAddedToCart: totalItems
 //   });
 // }
