import React from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';
import { store } from '../../redux/store.js';
import {
  insertToWishList,
  removeFromWishList,
  insertProductToCart,
  removeProductFromCart,
  addToCompare,
  removeFromCompare,
} from '../../redux/actions/index.js';

const defaultProps = {
  productId: '',
  product: {
    _id: '',
    src: '/images/products/placeholder.jpg',
    name: "Product Name",
    price: 0
  },
  inCart: false,
  inWish: false,
  inCompare: false
};

const propTypes = {
  productId: React.PropTypes.string.isRequired,
  product: React.PropTypes.object.isRequired,
  inCart: React.PropTypes.bool,
  inWish: React.PropTypes.bool,
  inCompare: React.PropTypes.bool
};

class Product extends React.Component{
   constructor(props){
      super(props);

      // console.log("Product:: props", props);

      this.addToCart = this.addToCart.bind(this);
      this.removeFromCart = this.removeFromCart.bind(this);

      this.addToWishList = this.addToWishList.bind(this);
      this.addToCompare = this.addToCompare.bind(this);
   }
   componentWillReceiveProps(nextProps){
    //  console.log("componentWillReceiveProps", nextProps );
   }

   componentWillMount(){
    //  console.log("componentWillMount" );
   }

   addToCart(){
    store.dispatch(insertProductToCart(this.props.productId));
   }

   removeFromCart(){
    store.dispatch(removeProductFromCart(this.props.productId));
   }

   addToWishList(){

   }

   addToCompare(){

   }

   render(){

    const {
      product,
      inCart,
      inWish,
      inCompare
    } = this.props;

    return (
       <Col sm={4}>
         <div className="product-image-wrapper">
           <div className="single-products">
               <div className="productinfo text-center">
                 <img src={ product.src } alt={ product.name } />
                 <h2>$ { product.price }</h2>
                 <p>{ product.name }</p>
                  <a
                    onClick={ inCart ? this.removeFromCart : this.addToCart }
                    className={ inCart ? "btn btn-default add-to-cart-new" : "btn btn-default add-to-cart" }>
                    <i className="fa fa-shopping-cart"></i>
                    { inCart ? "Added" : "Add to cart" }
                  </a>
               </div>
           </div>

           <div className="choose">
             <ul className="nav nav-pills nav-justified">
               <li
                  className={ inWish ? 'active' : ''}
                  onClick={ this.addToWishList} >

                  <a>
                    <i className="fa fa-minus-square-o"></i>
                    { inWish ? 'Remove from wishlist' : "Add to wishlist"}
                  </a>
                </li>
               <li
                  className={ inCompare ? "active" : ""}
                  onClick={ this.addToCompare }>
                  <a>
                    <i className="fa fa-minus-square-o"></i>
                      { inCompare ? "Remove from compare" : "Add to compare" }
                  </a>
              </li>
             </ul>
           </div>
         </div>
       </Col>
     );
   }
 }

Product.defaultProps = defaultProps;
Product.propTypes = propTypes;

export default Product;
