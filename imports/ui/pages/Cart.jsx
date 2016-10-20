import React from 'react';
import ReactDOM from 'react-dom';
import CartContainer  from '../containers/cart/CartContainer';

class CartPage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<CartContainer />);
    }
}

export default CartPage;
