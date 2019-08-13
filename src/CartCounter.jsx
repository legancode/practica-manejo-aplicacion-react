import React from 'react'
import { connect } from "react-redux"

const CartCounter = ({ cartLength }) => {
    return (
        <div className="col d-flex justify-content-center justify-content-md-end">
            <span className="text-white bg-info cart-info">{`Carrito: ${cartLength.length}`}</span>
        </div>
    )
}

//mapea el estado y lo pasa por props
const mapStateToProps = state => (
    //Todo esto sera pasado al componente Card que esta arriba
    {
        cartLength: state.cart
    }
)

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter)
