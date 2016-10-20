import React from 'react';
import ReactDOM from 'react-dom';
import Products  from '../components/Products';
import ProductsContainer  from '../containers/products/ProductsContainer';

  /*
  * Products Page that will dispay
  * Products Header
  * Products Container
  * Products Footer
  */

class ProductsPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ProductsContainer />
    );
  }
}

export default ProductsPage;
