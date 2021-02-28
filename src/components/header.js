import React from 'react';
import 'bulma/css/bulma.css';
import {Link} from 'gatsby';
const Header = () => {
    return(
        <>
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="#"> Home</Link>
            </div>
        </nav>
        </>
    )
}

export default Header