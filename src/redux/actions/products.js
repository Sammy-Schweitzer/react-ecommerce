import axios from "axios";
import { BASEURL } from "../../config";
import { ALL_PRODUCTS } from "../action-types";

export const allProducts = () => async (dispatch) => {
  const response = await axios.get(`${BASEURL}/products`);

  dispatch({
    type: ALL_PRODUCTS,
    payload: response.data,
  });
};
