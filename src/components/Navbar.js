import React from 'react';
import 'bulma/css/bulma.css';
import {Link} from 'gatsby';

const Navbar = () => {
    return(
        <>
        <nav className="navbar transparent is-fixed-top">
            <div className="navbar-brand">
                <Link className="navbar-item nav-title"to="#">Agramith Media</Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar