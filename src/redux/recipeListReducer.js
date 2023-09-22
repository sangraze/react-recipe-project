import { FETCH_ALL_RECEPIE } from "./ActionTypes";

const initialState = {
  allRecipe: []
}

const recipeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_RECEPIE:
      return {
        ...state,
        allRecipe : action.payload
      }
      default:
        return{
            ...state
        }
      
  }
}

export default recipeListReducer;
