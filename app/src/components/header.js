import React from 'react';
import './header.scss';


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
}

export default Header;
