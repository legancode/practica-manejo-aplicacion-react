import React, { useEffect } from 'react'
import CardDate from "./CardDate"
import store from './redux/store';
import { connect } from 'react-redux';
import { getUsers } from './redux/actionCreators'

const Dates = ({ users }) => {

    useEffect(() => {
        if (users.length) return
        store.dispatch(getUsers())
    }, [])

    return (
        <div className="container">
            <div className="row justify-content-center justify-content-md-around">
                {users.map(user => <CardDate key={user.id} name={user.name} email={user.email} />)}
            </div>
        </div>
    )
}

const mapStateToProps = state => (
    {
        users: state.rootUsers.users
    }
)

export default connect(mapStateToProps, {})(Dates)
