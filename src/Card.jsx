import React from 'react'
import { addToCart, removeToCart } from './redux/actionCreators';
import { connect } from "react-redux"

const Card = ({ id, name, cart, addCourseToCart, removeCourseToCart }) => {
    return (
        <div className="card pt-3 pb-3 mt-3">
            <div className="row justify-content-center">
                <div className="col-10 bg-secondary text-white text-center mb-2 card-item d-flex align-items-center justify-content-center">{name.toUpperCase()}</div>
                {
                    cart.find(item => item === id)
                        ? <button
                            type="button"
                            onClick={() => removeCourseToCart(id)}
                            className="btn btn-danger">
                            Eliminar del carrito
                            </button>
                        : <button
                            type="button"
                            onClick={() => addCourseToCart(id)}
                            className="btn btn-primary">
                            Agregar al carrito
                            </button>
                }
            </div>
        </div>
    )
}

// Pasar datos a props
const mapStateToProps = state => ({
    cart: state.cart
})

// Pasar funciones a props
const mapDispatchToProps = dispatch => {
    console.log(dispatch)

    return {
        addCourseToCart(id) {
            // Llamar al dispatch y pasarle el actionCreator addToCart()
            dispatch(addToCart(id))
        },

        removeCourseToCart(id) {
            dispatch(removeToCart(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
