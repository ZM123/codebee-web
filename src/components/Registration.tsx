import './Registration.scss';

import * as React from 'react';
import { createFragmentContainer } from 'react-relay';
import { Link } from 'react-router-dom';

import RegistrationForm from './forms/RegistrationForm';
import Panel from './ui/Panel';

class Registration extends React.Component {
  render() {
    return (
      <div className="Registration">
        <Panel>
          <h1>Create an Account</h1>
          <RegistrationForm className="Registration-form" />
          <div className="Registration-login">Got an account? <Link to="/login">Login here!</Link></div>
        </Panel>
      </div>
    );
  }
}

const container: React.ComponentClass = createFragmentContainer(Registration, {});

export default container;
