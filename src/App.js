import React from 'react';

import Home from './components/home/Home'
import Load from './components/load/Load'
import Details from './components/detail/Details'
import Login from './components/login/Login'
import PrivateRoute from "./privateRoute";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {

  return (


    <div className="App">
      <Router>

        <Switch> 
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/" exact component={Home}/>
          <PrivateRoute path="/home" component={Home}/>
          <PrivateRoute path="/load" component={Load}/>
          <PrivateRoute path="/detail/:id" component={Details}/>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
