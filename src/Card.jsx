import React from 'react'
import { connect } from "react-redux"

const Card = props => {
    return (
        <div className="card pt-3 pb-3 mt-3">
            <div className="row justify-content-center">
                <div className="col-10 bg-secondary text-white text-center mb-2 card-item d-flex align-items-center justify-content-center">{props.name.toUpperCase()}</div>
                <button type="button" className="btn btn-primary">Comprar</button>
            </div>
        </div>
    )
}

export default Card
