import React from 'react';
import '../assets/css/styles.scss';

class Register extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      islogActive: props.islogActive,
      nombre: '',
      email: '',
      password: '',
      passwordConfirm: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNombreChange = this.handleNombreChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(
      this
    );
  }

  handleSubmit(event) {
    if (this.state.password === this.state.passwordConfirm) {
      this.validarEmail();
    } else {
      this.setState({
        message: 'Verifique el password ingresado.',
      });
    }
    event.preventDefault();
  }

  handleNombreChange(event) {
    this.setState({ nombre: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handlePasswordConfirmChange(event) {
    this.setState({ passwordConfirm: event.target.value });
  }

  registrar = async () => {
    var url = 'http://127.0.0.1:5000/users';
    var data = {
      nombre: this.state.nombre,
      email: this.state.email,
      password: this.state.password,
    };

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => {
        if (response) {
          // TO DO validar que no se repita user y email
          // TO DO nos quedamos ahi, o vamos al login?
          this.setState({
            isUserAuthenticated: false,
            message: 'Usuario registrado con éxito.',
          });
        } else {
          this.setState({
            isUserAuthenticated: false,
            message: 'Error en el servidor',
          });
        }
      });
  };

  validarEmail = async () => {
    var url = 'http://127.0.0.1:5000/users/' + this.state.email;
    await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => {
        if (response) {
          if (response.length > 0) {
            this.setState({
              message: 'El email ingresado ya esta en uso.',
            });
          } else {
            this.registrar();
          }
        } else {
          this.setState({
            message: 'Error en el servidor',
          });
        }
      });
  };

  render() {
    let alert;
    if (this.state.message) {
      alert = <div className="alert alert-danger" role="alert">
        {this.state.message}
      </div>
    }
    else {
      alert = null;
    }
    return (
      <div className="register-wrapper">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center align-items-center">
            <div className="form">
              <div className="logo"></div>
              {alert}
              <form className="login-form" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleEmailChange}
                      required
                      maxLength="40"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      value={this.state.nombre}
                      onChange={this.handleNombreChange}
                      required
                      maxLength="100"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <input
                      type="password"
                      placeholder="Contraseña"
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                      required
                      maxLength="15"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="password"
                      placeholder="Confirme contraseña"
                      value={this.state.passwordConfirm}
                      onChange={this.handlePasswordConfirmChange}
                      required
                      maxLength="15"
                    />
                  </div>
                </div>
                <button type="submit" className="yellow">
                  Registrarme
                </button>
                <hr></hr>
                <a className="btn-link" href="/login">
                  <small>Volver</small>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
