import { ADD_TO_CART } from "./actions"
import { REMOVE_TO_CART } from "./actions"

const addToCart = id => (
    {
        type: ADD_TO_CART,
        id
    }
)

const removeToCart = id => (
    {
        type: REMOVE_TO_CART,
        id
    }
)

export { addToCart, removeToCart }