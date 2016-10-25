const initialState = {
  catId: 0,
  query: "",
  minPrice:0,
  maxPrice:0,
};

const categoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_PRODUCT_ID_TO_CATEGORY":
      return {
          ...state,
            catId:action.catId
      };

    case "ADD_PRICE_RANGE_TO_CATGORY":
      return {
          ...state,
          minPrice:action.min,
          maxPrice:action.max,
      };
    case "SET_QUERY":
      return {
          ...state,
          query:action.query
      };


    default:
      return state;
  }
}

export default categoryReducer;
