import React from 'react';
import './header.scss';
import logo from '../assets/images/logo.png';
function Header() {
    return (
        <header className="bg-top navbar navbar-expand navbar-dark flex-column flex-md-row sticky-top">
            <a className="navbar-brand text-white" href="/#">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy">
                </img>
                CopyMeme
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="text-white navbar-brand" href="/#">Home</a>
                    <a class="text-white  navbar-brand" href="/subirMeme">Subir Meme</a>
                    <a class="text-white  navbar-brand" href="/perfil">Perfil</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
