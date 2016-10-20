const initialState = {
  wishList: []
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_PRODUCT_TO_WISHLIST":
      return {
          ...state,
          wishList: [
              ...state.wishList,
              action.productId
          ]
      };

    case "REMOVE_PRODUCT_FROM_WISHLIST":
      return {
          ...state,
          wishList: state.wishList.filter( (val) => val !== action.productId )
      };

    default:
      return state;
  }
}

export default userReducer;
