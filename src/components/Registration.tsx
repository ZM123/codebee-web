import * as React from 'react';
import { createFragmentContainer } from 'react-relay';

import RegistrationForm, { RegistrationData } from './RegistrationForm';
import RegisterMutation from '../mutations/RegisterMutation';

interface Props {
  relay?: any;
}

interface State {
  data: RegistrationData;
}

class Registration extends React.Component<Props, State> {
  state: State = {
    data: {
      name: '',
      username: '',
      email: '',
      password: ''
    }
  };

  handleChange = (data: RegistrationData) => {
    this.setState({ data });
  }

  handleSubmit = (data: RegistrationData) => {
    RegisterMutation(this.props.relay.environment, data);
  }

  render() {
    return (
      <div>
        <h1>User Registration</h1>
        <RegistrationForm data={this.state.data} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const container: React.ComponentClass<Props> = createFragmentContainer(Registration, {});

export default container;
