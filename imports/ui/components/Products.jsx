import React from 'react';
import SingleProduct  from './SingleProduct';
import CategoriesContainer from '../containers/products/categoriesContainer.jsx';
import { Col,FormGroup, FormControl } from 'react-bootstrap';
import Paginator from './Paginator'
import { store } from '../redux/store.js';
import {
  updatePageNumber
} from '../redux/actions/index.js';

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
      // console.log("Props are changed in products", nextProps);
   }
   componentWillMount(){

   }
   renderTasks() {
     let count = 0,
     from , to,
     pageNumber = store.getState().pageNumber;
    //  console.log("Page Number that is saved in store is " , pageNumber);
     to = pageNumber * 6;
     from = to - 6 ;
     var filteredProducts = this.props.products.filter(function(x , count) {
       if ( count >= from && count < to )
          return x ;
        count++;
     });
    //  console.log("Filtered products are  " , filteredProducts);

    // return this.props.products.map((obj) => (
    return filteredProducts.map((obj) => (
        <SingleProduct
          key = {obj._id._str}
          id = {obj._id._str}
          src = {obj.src}
          name = {obj.name}
          price = {obj.unitPrice}
          inWish = {obj.inWish}
          inCart = {obj.inCart}
          catId = {obj.catId}
        />
      ));
    }

   render(){
    return (
      <div className="container">
        <div className="row">
          {/* <Categories /> */}
          <CategoriesContainer />
            <Col sm={9} className="padding-right" >
              <h2 className="title text-center">Features Items</h2>
            
              {this.renderTasks()}

            </Col>
        </div>

        <div className="row">
          <Col sm={5}></Col>
          <Col sm={4}>
              <Paginator total={this.props.products.length} />
          </Col>
          <Col sm={3}></Col>
        </div>

        <br/><br/>
      </div>

     );
   }
 }
 export default Products;
