import { combineReducers } from "redux";
import recipeListReducer from './recipeListReducer'
import sinleRecipeReducer from './sinleRecipeReducer'
import CartReducer from './CartReducer.js'

const rootReducer = combineReducers({
    allRecipe : recipeListReducer,
    singleRecipe : sinleRecipeReducer,
    cartList:CartReducer
})

export default rootReducer;