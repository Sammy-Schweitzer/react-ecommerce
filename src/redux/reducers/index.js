import { combineReducers } from "redux";
import { allProductReducer } from "./productReducers";

const reducers = combineReducers({
  allProducts: allProductReducer,
});

export default reducers;
