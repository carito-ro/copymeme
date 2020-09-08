import React from 'react';
import './register.scss';
import foto from '../assets/images/meme1.png';
import foto2 from '../assets/images/meme2.jpg';
import logo from '../assets/images/logo.png';


class Register extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            islogActive: props.islogActive,
        };
    }
    render() {
        return (
            <div class="register-wrapper">
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center align-items-center">
                        <div class="form">
                            <img src={logo} className="card-img-top w-25 mb-3"></img><span><b>Copymeme</b></span>
                            <form class="login-form">
                                <input type="text" placeholder="Email" />
                                <input type="text" placeholder="Nombre completo" />
                                <input type="password" placeholder="Contraseña" />
                                <input type="password" placeholder="Confirme contraseña" />
                                <button className="yellow">Registrarme</button>
                                <hr></hr>
                                <a className="btn-link" href="/login">Volver</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
