

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

export const insertProductToCart = ( productId , price ) => {
  return {
    type: "ADD_PRODUCT_TO_CART",
    productId,
    price
  };
}

export const removeProductFromCart = ( productId ) => {
  return {
    type: "REMOVE_PRODUCT_FROM_CART",
    productId
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
export const incQuantity = ( productId ) => {
  return {
    type: "INC_QUANTITY",
    productId
  };
}
export const decQuantity = ( productId ) => {
  return {
    type: "DEC_QUANTITY",
    productId
  };
}
export const updateQuantity = ( productId , quantity ) => {
  return {
    type: "CART_CHANGE_ITEM_QUANTITY",
    productId,
    quantity
  };
}
