import React from 'react';
import './App.css';
import Header from './components/header.js';
import Main from './components/main.js';
import { Profile } from './components/profile';
import AddMeme from './components/addMeme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link,
  Redirect
} from "react-router-dom";
<<<<<<< HEAD

function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/perfil">
            <Profile />
          </Route>
          <Route path="/subirMeme">
            <AddMeme />
          </Route>
          <Route path="/">
            <Main />
          </Route>
          <Redirect path="/" />
        </Switch>
      </Router>
    </>
  );
=======
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      islogActive: false, // true/false
    };
  }
  render() {
    return (
      <>
        <Header islogActive={this.state.islogActive} > </Header>
        <Router>
          <Switch>
            <Route path="/perfil">
              <Profile />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/subirMeme">
              <AddMeme />
            </Route>
            <Route path="/">
              <Main />
            </Route>
            <Redirect path="/#" />
          </Switch>
        </Router>
      </>
    );
  }
>>>>>>> c7de7f5... feat: Link para categorias desde una BD
}

export default App;

