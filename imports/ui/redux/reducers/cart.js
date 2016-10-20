const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_PRODUCT_TO_CART":
      return {
          ...state,
          items: [
              ...state.items,
              {
                productId: action.productId,
                quantity: 1
              }
          ]
      };

    case "REMOVE_PRODUCT_FROM_CART":
      return {
          ...state,
          items: state.items.filter(item => item.productId !== action.productId)
      };

    default:
      return state;
  }
}

export default cartReducer;
