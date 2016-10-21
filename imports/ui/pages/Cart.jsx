import React from 'react';
import ReactDOM from 'react-dom';
import CartItemListContainer  from '../containers/cart/ItemList';

class CartPage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <CartItemListContainer />
        );
    }
}

export default CartPage;
