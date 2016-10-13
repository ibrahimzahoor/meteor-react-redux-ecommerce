import React from 'react';
import SingleProduct  from './SingleProduct';
/*
 * It will receive Products from the Products container as props
 * Then it will display Products using the map function
 *
 */

 class Products extends React.Component{
   constructor(props){
     super(props);
   }

   componentWillReceiveProps(nextProps){
      console.log("Props are changed in products", nextProps);
   }
   renderTasks() {
    return this.props.products.map((obj) => (
      <SingleProduct
        key = {obj._id._str}
        id = {obj._id._str}
        src = {obj.src}
        name = {obj.name}
        price = {obj.unitPrice}
        inWish = {obj.inWish}
        inCart = {obj.inCart}
        />
    ));
    }

   render(){
    return (
      <div className="container">
        <div className="row">
          {this.renderTasks()}
        </div>
      </div>

     );
   }
 }
 export default Products;
