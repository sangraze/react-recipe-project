import { GET_RECEPIE_SINGLE } from "./ActionTypes";

const initialState = {
  singleRecipe: []
}

const sinleRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECEPIE_SINGLE:
      return {
        ...state,
        singleRecipe : action.payload
      }
      default:
        return{
            ...state
        }
      
  }
}

export default sinleRecipeReducer;
