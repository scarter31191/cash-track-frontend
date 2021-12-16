import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <h1 className="navbar-brand">CashTracker</h1>
    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
    <Link to="/accounts" className="nav-link">Accounts</Link>
    <Link to="/accounts/new" className="nav-link" href="#">New Account</Link>
  </div>
</nav>
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">   
    //         <div className="container-fluid">
    //             <h1>CashTracker</h1>
    //             <Link to="/">Home</Link>
    //             <Link to="/accounts">Accounts</Link>
    //             <Link to="/accounts/new">New Account</Link>
    //         </div>
    //   </nav>
    )
}

export default Navbar