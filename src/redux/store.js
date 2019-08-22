import { createStore, combineReducers } from "redux"
import { ADD_TO_CART, REMOVE_TO_CART, GET_USERS } from "./actions";
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialCart = {
    cart: []
}

const initialUsers = {
    users: []
}

const rootCart = (state = initialCart, action) => {
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

const rootUsers = (state = initialUsers, action) => {
    const { type, users } = action
    if (type === GET_USERS) {
        return {
            ...state,
            users
        }
    }
    return state
}

export default createStore(combineReducers({ rootCart, rootUsers }), composeWithDevTools(applyMiddleware(thunk)))