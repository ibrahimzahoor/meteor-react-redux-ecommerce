import React from 'react';
import ProductContainer from '../../containers/products/Product.jsx';

const propTypes = {
  productIds: React.PropTypes.array
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
          productIds
        } = this.props;

        return (
            <div className="container">
                <div className="row">
                    { productIds.map(productId => <ProductContainer key = { productId } productId = { productId } />) }
                </div>
            </div>
        );
    }
}

ProductList.propTypes = propTypes;

export default ProductList;
