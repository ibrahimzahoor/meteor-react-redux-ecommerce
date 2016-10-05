const initialState = {
  wishList: [],
  cartItems: [],
  compareList: [],
};

export const reducer =  ( state = initialState , action ) => {

    switch( action.type ) {
      case "ADD_PRODUCT_TO_WISH_LIST":
        var id = ObjectId(action.id);
        state = { ...state, wishList: state.wishList.concat(id) };
        break;
      case "REMOVE_PRODUCT_FROM_WISH_LIST":
        var id = ObjectId(action.id);
        state = { ...state, wishList: state.wishList.filter( (val) => val._str !== id._str )};
        break;
      case "ADD_PRODUCT_TO_CART":
        var obj = {};
        obj.id = ObjectId(action.cartItem.id);
        obj.quantity = action.cartItem.quantity;
        state = { ...state, cartItems: state.cartItems.concat(obj) };
        break;
      case "REMOVE_PRODUCT_FROM_CART":
        var obj = {};
        obj.id = ObjectId(action.cartItem.id);
        state = { ...state, cartItems: state.cartItems.filter( (val) => val.id._str !== obj.id._str )};
        break;
      case "ADD_PRODUCT_TO_COMPARE":
        var id = ObjectId(action.id);
        state = { ...state, compareList: state.compareList.concat(id) };
        break;
      case "REMOVE_PRODUCT_FROM_COMPARE":
        var id = ObjectId(action.id);
        state = { ...state, compareList: state.compareList.filter( (val) => val._str !== id._str )};
        break;
    }
    return state;
}
function ObjectId(hexString) {
   return new Mongo.ObjectID(hexString);
 };
