import React from 'react';
import '../assets/css/styles.scss';
import { userContext } from '../userContext';

class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    showWidget = (widget) => {
        widget.open();
    }
    render() {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: "pancho8725",
            uploadPreset: "preset_pancho"
        }, (error, result) => { });
        return (<userContext.Consumer>{
            ({ authenticated, logout }) => {
                if (authenticated) {
                    return (<nav className="navbar navbar-dark navbar-expand-sm bg-top sticky-top">
                        <a className="navbar-brand text-white" href="/">
                        </a>
                        <li className="dropdown menu dropleft">
                            <button className="btn text-white" id='btSwitch' type="button" data-toggle="dropdown">
                                <span className="navbar-toggler-icon text-center">
                                </span>
                            </button>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a href="/">Inicio</a></li>
                                <li className="nav-item"><a href="/subirMeme">Subir meme</a></li>
                                <li className="nav-item"><a onClick={logout}>Cerrar sesión</a></li>
                            </ul>
                        </li>
                    </nav>)
                } else {
                    return (<nav className="navbar navbar-dark navbar-expand-sm bg-top sticky-top">
                        <a className="navbar-brand text-white" href="/">
                        </a>
                        <li className="dropdown menu dropleft">
                            <button className="btn text-white" id='btSwitch' type="button" data-toggle="dropdown">
                                <span className="navbar-toggler-icon text-center">
                                </span>
                            </button>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a href="/">Inicio</a></li>
                                <li className="nav-item"><a href="/login">Iniciar sesión</a></li>
                            </ul>
                        </li>
                    </nav>)
                }
            }
        }
        </userContext.Consumer>)
    }
}

export default Header;
