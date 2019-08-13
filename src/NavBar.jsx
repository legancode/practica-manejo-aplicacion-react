import React from 'react'
import CartCounter from "./CartCounter"

const NavBar = () => {
    return (
        <div className="container bg-dark">
            <div className="row justify-content-center align-items-md-center pt-3 pb-3">
                <h1 className="text-white text-center text-md-left col-md-6">App Global State</h1>
                <CartCounter />
            </div>
        </div>
    )
}

export default NavBar
