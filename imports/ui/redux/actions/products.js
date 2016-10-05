

export const insertToWishList = ( id = 0 ) => {
  return {
    type: "ADD_PRODUCT_TO_WISH_LIST",
    id
  };
}

export const removeFromWishList = ( id = 0 ) => {
  return {
    type: "REMOVE_PRODUCT_FROM_WISH_LIST",
    id
  };
}

export const insertToCart = ( cartItem ) => {
  return {
    type: "ADD_PRODUCT_TO_CART",
    cartItem
  };
}
export const removeFromCart = ( cartItem ) => {
  return {
    type: "REMOVE_PRODUCT_FROM_CART",
    cartItem
  };
}

export const addToCompare = ( id = 0 ) => {
  return {
    type: "ADD_PRODUCT_TO_COMPARE",
    id
  };
}
export const removeFromCompare = ( id = 0 ) => {
  return {
    type: "REMOVE_PRODUCT_FROM_COMPARE",
    id
  };
}
