import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
            <Link to="/accounts">Accounts</Link> -
            <Link to="/accounts/new">New Account</Link> -
            <Link to="/">Home</Link>
            <h1>Cash Tracker</h1>
        </div>
    )
}

export default Navbar