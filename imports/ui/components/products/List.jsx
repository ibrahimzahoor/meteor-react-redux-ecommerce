import React from 'react';
import ProductContainer from '../../containers/products/Product.jsx';
import CategoriesContainer from '../../containers/categories/categoriesContainer.jsx';
import {Col} from 'react-bootstrap';

const propTypes = {
  productIds: React.PropTypes.array,
  loading: React.PropTypes.bool
};

class ProductList extends React.Component{
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        // console.log("ProductList::componentWillReceiveProps", nextProps);
    }

    render() {
        const {
          productIds,
          loading
        } = this.props;

        return (
            <div className="container">
                <div className="row">
                  {/* <Categories /> */}
                  <CategoriesContainer />
                  <Col sm={9} className="padding-right" >
                    <h2 className="title text-center">Features Items</h2>
                    { loading ? <div> Loading Contsinerrrrrrr </div> : productIds.map(productId => <ProductContainer key = { productId } productId = { productId } />) }
                  </Col>
                </div>
              </div>
        );
    }
}

ProductList.propTypes = propTypes;

export default ProductList;
