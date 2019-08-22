import React from 'react'
import PropTypes from 'prop-types'

const CardDate = ({ name, email }) => {
    return (
        <div className="card pt-3 pb-3 mt-3">
            <div className="text-dark text-center card-body">
                <h5>{name}</h5>
                <button className="btn btn-success">{email}</button>
            </div>
        </div>
    )
}

CardDate.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

CardDate.defaultProps = {
    name: "Default",
    email: "default@default.com"
}

export default CardDate
