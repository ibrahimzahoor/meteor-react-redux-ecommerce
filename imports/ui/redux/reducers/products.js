const initialState = {
  wishList: [],
  cartItems: [],
  compareList: [],
};

export const reducer =  ( state = initialState , action ) => {
    switch( action.type ) {
      case "ADD_PRODUCT_TO_WISH_LIST":
        state = { ...state, wishList: state.wishList.concat(action.id) };
        break;
      case "REMOVE_PRODUCT_FROM_WISH_LIST":
        state = { ...state, wishList: state.wishList.filter( (val) => val !== action.id )};
        break;
      case "ADD_PRODUCT_TO_CART":
        state = { ...state, cartItems: state.cartItems.concat(action.id) };
        break;
      case "REMOVE_PRODUCT_FROM_CART":
        state = { ...state, cartItems: state.cartItems.filter( (val) => val !== action.id )};
        break;
      case "ADD_PRODUCT_TO_COMPARE":
        state = { ...state, compareList: state.compareList.concat(action.id) };
        break;
      case "REMOVE_PRODUCT_FROM_COMPARE":
        state = { ...state, compareList: state.compareList.filter( (val) => val !== action.id )};
        break;
    }
    return state;
}
