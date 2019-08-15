import React from 'react'
import CartCounter from "./CartCounter"
import Menu from './Menu';

const NavBar = () => {
    return (
        <div className="container bg-dark">
            <div className="row justify-content-center justify-content-md-between align-items-md-center pt-3 pb-3">
                <h1 className="text-white text-center text-md-left col-md-6">App Global State</h1>
                <Menu />
                <CartCounter />
            </div>
        </div>
    )
}

export default NavBar
