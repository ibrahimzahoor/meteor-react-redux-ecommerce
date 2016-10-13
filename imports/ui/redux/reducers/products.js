const initialState = {
  wishList: [],
  cartItems: [],
  compareList: [],
  items:0,
  cartItemsTotalAmount:0
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
        obj.price = action.cartItem.price;
        obj.total = action.cartItem.total;
        state = { ...state, items: state.items + obj.quantity  };
        state = { ...state, cartItemsTotalAmount: state.cartItemsTotalAmount + obj.total };
        state = { ...state, cartItems: state.cartItems.concat(obj) };
        break;
      case "REMOVE_PRODUCT_FROM_CART":
        var obj = {};
        obj.id = ObjectId(action.cartItem.id);
        var data = state.cartItems.find( function( cartItem ){
            return cartItem.id._str === action.cartItem.id;
        });
        state = { ...state, items: state.items - data.quantity };
        state = { ...state, cartItemsTotalAmount : state.cartItemsTotalAmount - data.total };
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
