import { ADD_TO_CART } from "./actions"
import { REMOVE_TO_CART } from "./actions"
import { GET_USERS } from "./actions"

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

const getUsers = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(json => dispatch(
            {
                type: GET_USERS,
                users: json
            }
        ))
    console.log('se realizo ')
}

export { addToCart, removeToCart, getUsers }