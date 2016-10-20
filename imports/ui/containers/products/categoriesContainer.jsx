import React from 'react';
import {compose, composeWithTracker} from 'react-komposer';
import categoriesCollection from '../../../api/products/categories.js';
import Categories from '../../components/Categories.jsx';
import {store} from '../../redux/store.js';

const ProductsComposer = (props, onData) => {
  const subscription = Meteor.subscribe('categories.list');
  if (subscription.ready()) {
    // console.log("categories container calledddddd");
    let price = store.getState().category.price;
    // console.log("price saved in store is " , price);
    var categories = categoriesCollection.find({catId : {$lte:10}}).fetch();
    categories.forEach(function(cat) {
      // console.log("Category ID is " , cat.catId); // Working Perfectly
       cat.subCat = categoriesCollection.find({parentId:cat.catId}).fetch();
      //  console.log("Sub Category Ids are " , cat.subCat); // Perfect
    });
    categories.price = price;
    onData(null, {categories });
  }

};
const CategoriesContainer = composeWithTracker(ProductsComposer)(Categories);
export default CategoriesContainer;
