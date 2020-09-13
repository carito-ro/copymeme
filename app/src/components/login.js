import React from 'react';
import './login.scss';
import foto from '../assets/images/meme1.png';
import foto2 from '../assets/images/meme2.jpg';
import logo from '../assets/images/logo.png';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      islogActive: props.islogActive,
      email: '',
      password: '',
      isUserAuthenticated: false,
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(event) {
    this.login(this.state.email, this.state.password);
    event.preventDefault();
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  login = async (email, password) => {
    var url = 'http://127.0.0.1:5000/login';
    var data = { email: email, password: password };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error('Error:', error);
      })
      .then((response) => {
        if (response) {
          if (response.user === null) {
            this.setState({
              isUserAuthenticated: false,
              message: response.message,
            });
          } else {
            this.setState({
              isUserAuthenticated: true,
              message: response.message,
            });
          }
        } else {
          this.setState({
            isUserAuthenticated: false,
            message: 'Error en el servidor',
          });
        }
      });
  };
  render() {
    return this.state.isUserAuthenticated ? (
      <Redirect to="/" />
    ) : (
        <div class="login-wrapper">
          <div className="row">
            <div className="col-sm-6 d-flex justify-content-center align-items-center">
              <img
                id="img2"
                src={foto}
                className="card-img-top w-50 h-50"
                alt="sin-imagen2"
              ></img>
              <img
                id="img1"
                src={foto2}
                className="card-img-top w-50 h-50"
                alt="foto2"
              ></img>
            </div>
            <div className="col-sm-6 d-flex justify-content-left align-items-center">
              <div class="form">
                <img
                  src={logo}
                  className="card-img-top w-25 mb-3"
                  alt="logo"
                ></img>
                <span>
                  <b>Copymeme</b>
                </span>
                <form className="login-form" onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    required
                    maxLength="40"
                  />
                  <input
                    type="password"
                    placeholder="contraseña"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    required
                    maxLength="15"
                  />
                  <input
                    className="submit"
                    type="submit"
                    value="Iniciar sesión"
                  />
                  <h5>{this.state.message}</h5>
                  <hr></hr>
                  <a className="yellow" href="/register">
                    Registrarme
                </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Login;
