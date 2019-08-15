import { createStore } from "redux"
import { ADD_TO_CART, REMOVE_TO_CART } from "./actions";
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
    cart: []
}

const rootReducer = (state = initialState, action) => {
    const { type, id } = action
    if (type === ADD_TO_CART) {
        if (state.cart.find(item => item === id)) return state

        return {
            ...state,
            cart: state.cart.concat(id)
        }
    }

    if (type === REMOVE_TO_CART) {
        const filter = state.cart.filter(item => item !== id)
        return {
            ...state,
            cart: filter
        }
    }


    return state
}

export default createStore(rootReducer, composeWithDevTools())