import './Login.scss';

import * as React from 'react';
import { createFragmentContainer } from 'react-relay';
import { Link } from 'react-router-dom';

import LoginForm from './forms/LoginForm';

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <LoginForm className="Login-form" />
        <div className="Login-register">No account? <Link replace to="/home/register">Create one here!</Link></div>
      </div>
    );
  }
}

const container: React.ComponentClass = createFragmentContainer(Login, {});

export default container;
