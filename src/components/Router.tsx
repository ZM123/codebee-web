import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import DashboardPage from './pages/DashboardPage';

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={HomePage as any}/>
        <Route path="/about" component={TestPage} />
        <Route path="/test" component={TestPage} />
        <Route path="/dashboard" component={DashboardPage as any} />
      </Switch>
    );
  }
}
