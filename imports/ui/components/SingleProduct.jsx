import React from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';

/*
 * It will receive cart items from the cart container as props
 * Then it will display cart list using map function
 * It will aslo calculate total no of items and their price
 */
 const defaultProps = {
    src : '/images/home/product1.jpg',
    name: "Product Name",
    price: 0,
    inCart: false,
    inWish: false,
    inCompare: false
 };

 const propTypes = {
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
   componentWillMount(){
     this.setState({
        addedToCompare: this.props.inCompare,
        addedToCart: this.props.inCart,
        addedToWishList: this.props.inWish
      });
   }
   addToCart(){
     console.log("Product ID is.... " + this.props._id);
     this.setState({ addedToCart : !this.state.addedToCart})
   }
   addToWishList(){
     this.setState({ addedToWishList : !this.state.addedToWishList});
   }
   addToCompare(){
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
                    className="btn btn-default add-to-cart">
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
