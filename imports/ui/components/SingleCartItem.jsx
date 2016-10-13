  import React from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';
import { store } from '../redux/store.js';
import { Link } from 'react-router';

import {
  insertToWishList,
  removeFromWishList,
  insertToCart,
  removeFromCart,
  addToCompare,
  removeFromCompare
} from '../redux/actions/index.js';


/*
 * It will receive cart items from the cart container as props
 * Then it will display cart list using map function
 * It will aslo calculate total no of items and their price
 */
 const defaultProps = {
    id : "",
    src : '/images/cart/one.png',
    name: "Cart Item Name",
    price: 0,
    quantity:1
 };

 const propTypes = {
    id : React.PropTypes.string,
    src: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    inCart: React.PropTypes.bool,
    inWish: React.PropTypes.bool,
    inCompare: React.PropTypes.bool
 };
class SingleCartItem extends React.Component{
   constructor(props){
      super(props);
      this.state = {
        quantity:1,
      };
      this.updateQuantity = this.updateQuantity.bind(this);
      this.decQuantity = this.decQuantity.bind(this);
      this.incQuantity = this.incQuantity.bind(this);
      this.handleStore = this.handleStore.bind(this);
      this.update = this.update.bind(this);
   }
   componentWillReceiveProps(nextProps){
      // console.log("Props are changed in Single Cart Item" , nextProps );
   }
   componentWillMount(){
     this.setState({
        quantity:this.props.quantity
      });
   }
   updateQuantity(e) {
      var qty =  e.target.value !== "" ? parseInt(e.target.value) : 1 ;
      var cartObj = this.handleStore();
      this.setState({quantity: qty}, function(){
        this.update(cartObj);
      });
    }
    decQuantity(){
      var cartObj = this.handleStore();
      this.setState({quantity: this.state.quantity === 1 ? 1 : this.state.quantity - 1},
        function(){
        this.update(cartObj);
      });
    }
    incQuantity(){
      var cartObj = this.handleStore();
      this.setState({quantity: this.state.quantity + 1},
        function(){
        this.update(cartObj);
      });
    }
    handleStore(){
      var cartObj = {};
      cartObj.id = this.props.id;
      store.dispatch(removeFromCart(cartObj));
      this.props.calculateTotal(store.getState().cartItemsTotalAmount , store.getState().items); // calling parent function
      return cartObj;
    }
    update(cartObj){
      cartObj.quantity = this.state.quantity;
      cartObj.total = this.state.quantity * this.props.price;
      store.dispatch(insertToCart(cartObj));
      this.props.calculateTotal(store.getState().cartItemsTotalAmount , store.getState().items); // calling parent function
    }
   render(){
      const {
        quantity,
      } = this.state;
      const {
        id,
        src,
        name,
        price,
      } = this.props;
      var imageSize = {
        height:"110px",
        width:"110px"
      };
     return(
       <tr>
        <td className="cart_product">
          <a href=""><img src={src} style={imageSize} alt=""/></a>
        </td>
        <td className="cart_description">
          <h4><a href="">{name}</a></h4>
          <p>Web ID: 1089772</p>
        </td>
        <td className="cart_price">
          <p>${price}</p>
        </td>
        <td className="cart_quantity">
          <div className="cart_quantity_button">
            <a onClick={this.incQuantity} className="cart_quantity_up" > + </a>
            <input className="cart_quantity_input"
            type="text" name="quantity"
            autoComplete="off"
            size="2"
            value={this.state.quantity}
            onChange={this.updateQuantity}

            ref="quantity"
            />
            <a onClick={this.decQuantity} className="cart_quantity_down" > - </a>
          </div>
        </td>
        <td className="cart_total">
          <p className="cart_total_price">${quantity * price}</p>
        </td>
        <td className="cart_delete">
        	<Link to="/cart" onClick={ this.handleStore} className="cart_quantity_delete"><i className="fa fa-times"></i></Link>
        </td>
      </tr>
     );
   }
 }

 SingleCartItem.defaultProps = defaultProps ;
 SingleCartItem.propTypes = propTypes ;
 export default SingleCartItem;
