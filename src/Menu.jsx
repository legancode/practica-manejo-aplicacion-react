import React from 'react'
import { NavLink } from "react-router-dom"

const Menu = () => {
    return (
        <ul className="nav nav-pills col col-md-3">
            <li className="nav-item"><NavLink activeClassName="active" exact className="nav-link text-light" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink activeClassName="active" className="nav-link text-light" to="/datos">Datos</NavLink></li>
        </ul>
    )
}

export default Menu
