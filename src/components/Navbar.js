import React, {useEffect} from 'react';
import 'bulma/css/bulma.css';
import {Link} from 'gatsby';

const Navbar = () => {
    useEffect(() => {
        let burger = document.getElementById(`burger`)
        let menu = document.getElementById(`menu`)
        burger.addEventListener(`click`, function () {
          burger.classList.toggle(`is-active`)
          menu.classList.toggle(`is-active`)
        })
      })
    return(
        <>
        <nav className="navbar is-fixed-top">
            <div className="navbar-brand">
                <Link className="navbar-item nav-title"to="#">Claude Mahon</Link>
                <div role="button"
                    id="burger"
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
                </div>
                <div className="navbar-menu" id="menu">
                    <div className="navbar-end">
                        <Link className="navbar-item" to="#">Projects`</Link>
                        <Link className="navbar-item" to="#">Contact</Link>
                    </div>
                </div>
        </nav>
        </>
    )
}

export default Navbar