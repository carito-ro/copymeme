import React from 'react';
import './login.scss';
import foto from '../assets/images/meme1.png';
import foto2 from '../assets/images/meme2.jpg';
import logo from '../assets/images/logo.png';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            islogActive: props.islogActive,
        };
    }

    render() {
        return (
            <div class="login-wrapper">
                <div className="row">
                    <div className="col-sm-6 d-flex justify-content-center align-items-center">
                        <img id="img2" src={foto} alt="Es una foto" className="card-img-top w-50 h-50"></img>
                        <img id="img1" src={foto2} alt="Es una foto" className="card-img-top w-50 h-50"></img>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-left align-items-center">
                        <div class="form">
                            <img src={logo} alt="Es una foto" className="card-img-top w-25 mb-3"></img><span><b>Copymeme</b></span>
                            <form class="login-form">
                                <input type="text" placeholder="email" />
                                <input type="password" placeholder="contraseña" />
                                <a className="submit" href="/" type="submit">Iniciar sesión</a>
                                <hr></hr>
                                <a className="yellow" href="/register">Registrarme</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
