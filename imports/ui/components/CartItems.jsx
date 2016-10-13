import React from 'react';
import SingleCartItem  from './SingleCartItem';
import { store } from '../redux/store.js';


 class CartItems extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       itemsAddedToCart: 0,
       total:0
     };
     this.calculateTotal = this.calculateTotal.bind(this);
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
          calculateTotal={this.calculateTotal}
          />
        ));
    }
    shouldComponentUpdate(){
      this.setState({
        itemsAddedToCart: store.getState().items,
        total:store.getState().cartItemsTotalAmount
      });
      return true;
    }
    componentWillReceiveProps(nextProps){
      //  console.log("Props are changed in Cart Item"  );
    }
    componentWillMount(){
      this.setState({
        itemsAddedToCart: store.getState().items,
        total:store.getState().cartItemsTotalAmount
       });
    }
    calculateTotal(totalAmount , totalItems){
      this.setState({
        total: totalAmount,
        itemsAddedToCart: totalItems
      });
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
                {this.state.itemsAddedToCart ? <tr>
                      <td colSpan={4}>&nbsp;</td>
                      <td  colSpan={2}>
                        <table className="table table-condensed total-result">
                          <tbody><tr>
                            <td>Cart Sub Total</td>
                            <td><div style={setWidth}>{this.state.total}</div></td>
                          </tr>
                          <tr>
                            <td>Exo Tax</td>
                            <td>2%</td>
                          </tr>
                          <tr className="shipping-cost">
                            <td>Shipping Cost</td>
                            <td>Free</td>
                          </tr>
                          <tr>
                            <td>Total</td>
                            <td><span ><div style={setWidth}>{this.state.total + ((this.state.total*2)/100)}</div></span></td>
                          </tr>
                        </tbody></table>
                      </td>
                    </tr>: <tr><td><h5>No Items have been added to the cart</h5></td></tr>}

               </tbody>
             </table>
           </div>
         </div>
       </section>
     );
   }
 }
 export default CartItems;
