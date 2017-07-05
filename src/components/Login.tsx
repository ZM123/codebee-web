import './Login.scss';

import * as React from 'react';
import { createFragmentContainer } from 'react-relay';
import { Link } from 'react-router-dom';

import LoginForm from './forms/LoginForm';
import Panel from './ui/Panel';

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <Panel>
          <h1>Login</h1>
          <LoginForm className="Login-form" />
          <div className="Login-register">No account? <Link to="/register">Create one here!</Link></div>
        </Panel>
      </div>
    );
  }
}

const container: React.ComponentClass = createFragmentContainer(Login, {});

export default container;
