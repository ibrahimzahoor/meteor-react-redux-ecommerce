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
                quantity: 1,
                price:action.price,
              }
          ]
      };

    case "REMOVE_PRODUCT_FROM_CART":
      return {
          ...state,
          items: state.items.filter(item => item.productId !== action.productId)
      };
    case "INC_QUANTITY":
      return {
        ...state,
        items: state.items.map(item => {
          if(item.productId === action.productId) {
            item.quantity++;
          }
          return item;
        })
      };
    case "DEC_QUANTITY":
      return {
        ...state,
        items: state.items.map(item => {
          if(item.productId === action.productId) {
            item.quantity--;
          }
          return item;
        })
      };
    case "CART_CHANGE_ITEM_QUANTITY":
      return {
        ...state,
        items: state.items.map(item => {
          if(item.productId === action.productId) {
            item.quantity = action.quantity;
          }
          return item;
        })
      };

    default:
      return state;
  }
}

export default cartReducer;
