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
   getTasks() {
       return [
         { _id: 1, src: '/images/home/product1.jpg' , name: 'Easy Polo Black Edition' , price: 100 , inCart: false , inWish: false , inCompare: false  },
         { _id: 2, src: '/images/home/product2.jpg' , name: 'iPhone 4 Black' , price: 50 , deal:"/images/home/sale.png" , inCart: false , inWish: false , inCompare:false },
         { _id: 3, src: '/images/home/product3.jpg' , name: 'Ascend P6' ,  price: 70 , deal:"/images/home/new.png" , inCart: false , inWish: false , inCompare:false  },
       ];
     }
     renderTasks() {
      return this.getTasks().map((obj) => (
        <SingleProduct
          key = {obj._id}
          src = {obj.src}
          name = {obj.name}
          price = {obj.price}
          inCart = {obj.inCart}
          inWish = {obj.inWish}
          inCompare = {obj.inCompare}
          />
      ));
    }

   render(){
     return(
      <div className="container">
        <div className="row">
          {this.renderTasks()}
        </div>
      </div>

     );
   }
 }
 export default Products;
