import { ALL_PRODUCTS } from "../action-types";

const initState = {
  products: [],
};

export const allProductReducer = (state = initState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};
