import React from 'react';
import './header.scss';
import logo from '../assets/images/logo.png';
function Header() {
    return (
        <>
            <div className="fixed-top">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <h5 class="text-white h4">Collapsed content</h5>
                        <span class="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
                <nav class="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/#">
                        <img src={logo} width="auto" height="50" class="d-inline-block align-top" alt="" loading="lazy"></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        </>
    );
}

export default Header;
