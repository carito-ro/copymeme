import React from 'react';
import './header.scss';
import logo from '../assets/images/logo.png';
function Header() {
    return (
        <header className="bg-top navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
            <a className="navbar-brand text-white" href="/#">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"></img>
                    CopyMeme
                </a>
            <div className="flex-shrink-1 ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </header>
    );
}

export default Header;
