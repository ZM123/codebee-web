import * as React from 'react';
import { Switch, Route } from 'react-router-dom'

import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => <HomePage />} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/test" component={TestPage} />
      </Switch>
    );
  }
}
