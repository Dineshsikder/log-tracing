import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import PermanentDrawerLeft from './components/drawer';
import RegisterContainer from './components/registerContainer';
import SigninContainer from './components/signinContainer';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/signin" component={SigninContainer} />
        <Route path="/register" component={RegisterContainer} />
        {/* <Route path="/" component={PermanentDrawerLeft} /> */}
        <ProtectedRoute path="/home" loggedIn={sessionStorage.user ? true : false} component={PermanentDrawerLeft} />
        <Route render={() => <div>404</div>} /> 
      </Switch>
    </Router>
  );
}

export default App;
