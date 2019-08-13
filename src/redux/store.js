import { createStore } from "redux"

const initialState = {
    cart: []
}

const rootReducer = (state = initialState, action) => {
    return state
}

export default createStore(rootReducer)