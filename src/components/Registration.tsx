import './Registration.scss';

import * as React from 'react';
import { createFragmentContainer } from 'react-relay';
import { Link } from 'react-router-dom';

import RegistrationForm from './forms/RegistrationForm';

class Registration extends React.Component {
  render() {
    return (
      <div className="Registration">
        <RegistrationForm className="Registration-form" />
        <div className="Registration-login">Got an account? <Link replace to="/home/login">Login here!</Link></div>
      </div>
    );
  }
}

const container: React.ComponentClass = createFragmentContainer(Registration, {});

export default container;
