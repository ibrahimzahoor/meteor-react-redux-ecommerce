import React from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';
import { store } from '../../redux/store.js';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

import {
  insertToWishList,
  removeFromWishList,
  insertProductToCart,
  removeFromCart,
  addToCompare,
  removeProductFromCart,
  incQuantity,
  decQuantity,
  updateQuantity,
} from '../../redux/actions/index.js';


/*
 * It will receive cart items from the cart container as props
 * Then it will display cart list using map function
 * It will aslo calculate total no of items and their price
 */
 const defaultProps = {
  product: {
    id : "",
    src : '/images/cart/one.png',
    name: "Cart Item Name",
    price: 0
  },
  quantity:1
};

const propTypes = {
  product: React.PropTypes.object.isRequired,
  quantity: React.PropTypes.number.isRequired,
};
class CartItem extends React.Component{
   constructor(props){
      super(props);
      this.state = {
        quantity:1,
      };
      this.updateQuantity = this.updateQuantity.bind(this);
      this.decQuantity = this.decQuantity.bind(this);
      this.incQuantity = this.incQuantity.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      console.log("Props received in SingleCartItem components are " , props);
   }
   componentWillReceiveProps(nextProps){
      // console.log("Props are changed in Single Cart Item" , nextProps );
   }
   componentWillMount(){
     this.setState({
        quantity:this.props.quantity
      });
   }
   updateQuantity(event) {
     const qty =  event.target.value !== "" ? parseInt(event.target.value) : 1 ;
     store.dispatch(updateQuantity(this.props.productId , qty));
    }
    decQuantity(){
      store.dispatch(decQuantity(this.props.productId));
    }
    incQuantity(){
      store.dispatch(incQuantity(this.props.productId));
    }
    deleteItem(){
      store.dispatch(removeProductFromCart(this.props.productId));
      // browserHistory.push('/products');
    }
   render(){
      const {
        name,
        src,
        price,
      } = this.props.product;
      const { quantity } = this.props;
      var imageSize = {
        height:"110px",
        width:"110px"
      };
     return(
       <tr>
        <td className="cart_product">
          <a href=""><img src={src} style={imageSize} alt=""/></a>
        </td>
        <td className="cart_description text-center">
          <h4><a >{name}</a></h4>
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
            value={quantity}
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
        	<Link to="/cart"  onClick={ this.deleteItem} className="cart_quantity_delete"><i className="fa fa-times"></i></Link>
        </td>
      </tr>
     );
   }
 }

 CartItem.defaultProps = defaultProps ;
 CartItem.propTypes = propTypes ;
 export default CartItem;
