import React from 'react';
import './App.css';
import Header from './components/header.js';
import Main from './components/main.js';
import { Profile } from './components/profile';
import AddMeme from './components/addMeme';
import MemeDetail from './components/memeDetail';
import Login from './components/login';
import Register from './components/register';
import { userContext } from './userContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      authenticated: false,
    };
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  logout() {
    this.setState({ user: {}, authenticated: false, token: '' });
    localStorage.clear();
  }

  login(loggedUser, authToken) {
    this.setState({ user: loggedUser, authenticated: true, token: authToken });
  }

  render() {
    const value = {
      user: this.state.user,
      authenticated: this.state.authenticated,
      logout: this.logout,
    };
    return (
      <userContext.Provider value={value}>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/perfil">
              <Profile />
            </Route>
            <Route path="/meme/:meme">
              <MemeDetail />
            </Route>
            <Route path="/login">
              <Login loginUser={this.login} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/subirMeme">
              <AddMeme />
            </Route>
            <Route path="/memes/:category" component={Main} />
            <Route path="/">
              <Main />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </userContext.Provider>
    );
  }
}
export default App;
