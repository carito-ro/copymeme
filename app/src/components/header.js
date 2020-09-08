import React from 'react';
import './header.scss';
<<<<<<< HEAD
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
=======
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            islogActive: props.islogActive,
        };
    }
    showWidget = (widget) => {
        widget.open();
    }
    render() {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: "pancho8725",
            uploadPreset: "preset_pancho"
        },
            (error, result) => { console.log('llego', result.info) });

        if (this.state.islogActive === true) {
            return (
                <nav className="navbar navbar-dark navbar-expand-sm bg-top sticky-top">
                    <a className="navbar-brand text-white" href="/#">
                    </a>
                    <li className="dropdown menu dropleft">
                        <button className="btn text-white" id='btSwitch' type="button" data-toggle="dropdown">
                            <span className="navbar-toggler-icon text-center">
                            </span>
                        </button>
                        <ul className="dropdown-menu">
                            <li className="nav-item"><a href="/#">Inicio</a></li>
                            <li className="nav-item" onClick={() => this.showWidget(widget)}>
                                <a href="/#">Subir meme</a></li>
                            <li className="nav-item"><a href="/login">Cerrar sesión</a></li>
                        </ul>
                    </li>
                </nav>
            );
        } else {
            return (
                <nav className="navbar navbar-dark navbar-expand-sm bg-top sticky-top">
                    <a className="navbar-brand text-white" href="/#">
                    </a>
                    <a className="menu btn btn-outline-secondary" href="/login" data-target="#staticBackdrop"> Iniciar sesión</a>
                </nav>
            );
        }
    }
>>>>>>> c7de7f5... feat: Link para categorias desde una BD
}

export default Header;
