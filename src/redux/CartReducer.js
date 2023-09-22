import {ADD_TO_CART} from './ActionTypes'

const initialState = {
    cartList : []
}

 const CartReducer = (state=initialState , action)=>{

    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cartList: [...state.cartList ,action.payload]
            }
        
        default:{
            return {...state}
        }
    }
}

export default CartReducer;