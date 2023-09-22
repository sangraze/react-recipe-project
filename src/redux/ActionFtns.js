import { FETCH_ALL_RECEPIE } from "./ActionTypes";
import { GET_RECEPIE_SINGLE } from "./ActionTypes";
import { ADD_TO_CART } from "./ActionTypes";

export function getRecipeData(datalist) {
  return {
    type: FETCH_ALL_RECEPIE,
    payload: datalist,
  };
}
export function getSingleRecipe(datasingle) {
  return {
    type: GET_RECEPIE_SINGLE,
    payload: datasingle,
  };
}
export function addToCart(data) {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
}
