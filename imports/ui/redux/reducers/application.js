const initialState = {
  compareList: []
};

const applicationReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_PRODUCT_TO_COMPARE":
      return {
          ...state,
          compareList: [
              ...state.compareList,
              action.productId
          ]
      };

    case "REMOVE_PRODUCT_FROM_COMPARE":
      return {
          ...state,
          compareList: state.compareList.filter( (val) => val !== action.productId )
      };

    default:
      return state;
  }
}

export default applicationReducer;
