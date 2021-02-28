import React from 'react';
import 'bulma/css/bulma.css';
import {Link} from 'gatsby';
const Navbar = () => {
    return(
        <>
        <nav className="navbar is-fixed-top">
            <div className="navbar-brand">
                <Link className="navbar-item"to="#">CMJR Development</Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar