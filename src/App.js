import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Login from './component/buildingBlock/login'
import Register from './component/buildingBlock/register';
import PasswordReset from './component/buildingBlock/passwordReset';

import App2 from './component/App2';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="bg-dark">

      <Router>
        <Switch>

          <Route path="/adminPaneli">
            <App2></App2>
          </Route>

          <div className="container">
            <Route exact path="/">
              <Login></Login>
            </Route>

            <Route path="/registerPage">
              <Register></Register>
            </Route>

            <Route path="/passwordReset">
              <PasswordReset></PasswordReset>
            </Route>
          </div>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
