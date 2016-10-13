import React from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';
import { store } from '../redux/store.js';
import {
  insertToWishList,
  removeFromWishList,
  insertToCart,
  removeFromCart,
  addToCompare,
  removeFromCompare,
} from '../redux/actions/index.js';


/*
 * It will receive cart items from the cart container as props
 * Then it will display cart list using map function
 * It will aslo calculate total no of items and their price
 */
 const defaultProps = {
    id : "",
    src : '/images/home/product1.jpg',
    name: "Product Name",
    price: 0,
    inCart: false,
    inWish: false,
    inCompare: false
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
class SingleProduct extends React.Component{
   constructor(props){
      super(props);
      this.state = {
        addedToCart:false,
        addedToWishList: false,
        addedToCompare:false,
      };
      this.addToCart = this.addToCart.bind(this);
      this.addToWishList = this.addToWishList.bind(this);
      this.addToCompare = this.addToCompare.bind(this);
   }
   componentWillReceiveProps(nextProps){
      // console.log("Props are changed in Single Product" );
   }
   componentWillMount(){
     this.setState({
        addedToCompare: this.props.inCompare,
        addedToCart: this.props.inCart,
        addedToWishList: this.props.inWish
      });
   }
   addToCart(){
    var basicObj = {};
    basicObj.id = this.props.id;
    basicObj.quantity = 1;
    basicObj.price = this.props.price;
    basicObj.total = this.props.price;
     store.dispatch(
       this.state.addedToCart ? removeFromCart(basicObj) : insertToCart(basicObj)
     );
     this.setState({ addedToCart : !this.state.addedToCart});
   }
   addToWishList(){
     store.dispatch(
       this.state.addedToWishList ? removeFromWishList(this.props.id) : insertToWishList(this.props.id)
     );
     this.setState({ addedToWishList : !this.state.addedToWishList});
   }
   addToCompare(){
     store.dispatch(
       this.state.addedToCompare ? removeFromCompare(this.props.id) : addToCompare(this.props.id)
     );
     this.setState({ addedToCompare : !this.state.addedToCompare})
   }
   render(){
      const {
        addedToWishList,
        addedToCompare ,
        addedToCart
      } = this.state;
      const {
        id,
        src,
        name,
        price,
      } = this.props;

     return(
       <Col sm={4}>
         <div className="product-image-wrapper">
           <div className="single-products">
               <div className="productinfo text-center">
                 <img src={ src } alt="" />
                 <h2>$ { price }</h2>
                 <p>{ name }</p>
                  <a
                    onClick={ this.addToCart }
                    className={ addedToCart ? "btn btn-default add-to-cart-new" : "btn btn-default add-to-cart" }>
                    <i className="fa fa-shopping-cart"></i>
                    { addedToCart ? "Added" : "Add to cart" }
                  </a>
               </div>
           </div>

           <div className="choose">
             <ul className="nav nav-pills nav-justified">
               <li
                  className={ addedToWishList ? 'active' : ''}
                  onClick={ this.addToWishList} >

                  <a>
                    <i className="fa fa-minus-square-o"></i>
                    { addedToWishList ? 'Remove from wishlist' : "Add to wishlist"}
                  </a>
                </li>
               <li
                  className={ addedToCompare ? "active" : ""}
                  onClick={ this.addToCompare }>
                  <a>
                    <i className="fa fa-minus-square-o"></i>
                      { addedToCompare ? "Remove from compare" : "Add to compare" }
                  </a>
              </li>
             </ul>
           </div>
         </div>
       </Col>
     );
   }
 }

 SingleProduct.defaultProps = defaultProps ;
 SingleProduct.propTypes = propTypes ;
 export default SingleProduct;
