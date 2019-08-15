import React from 'react'
import { connect } from "react-redux"

const CartCounter = ({ cartLength }) => {
    console.log(cartLength)
    return (
        <div className="col col-md-3 d-flex justify-content-center justify-content-md-end">
            <span className="text-white bg-info cart-info">{`Carrito: ${cartLength.length}`}</span>
        </div>
    )
}

//Para pasar datos a los props de este componente
const mapStateToProps = state => (
    //Todo esto sera pasado al componente Card que esta arriba
    {
        cartLength: state.cart
    }
)
// Para pasar funciones a los props de este componente
const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter)
