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
}

export default App;

