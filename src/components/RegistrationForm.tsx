import * as React from 'react';

export interface RegistrationData {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface Props {
  data: RegistrationData;
  onChange: (data: RegistrationData) => void;
  onSubmit: (data: RegistrationData) => void;
}

interface State {

}

export default class RegistrationForm extends React.Component<Props, State> {
  state: State = {};

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit(this.props.data);
  }

  handleChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const data = Object.assign({}, this.props.data, {
      [key]: value
    });
    this.props.onChange(data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" value={this.props.data.name} onChange={e => this.handleChange('name', e)} />
        <input type="text" placeholder="Display Name" value={this.props.data.username} onChange={e => this.handleChange('username', e)} />
        <input type="text" placeholder="Email" value={this.props.data.email} onChange={e => this.handleChange('email', e)} />
        <input type="password" placeholder="Password" value={this.props.data.password} onChange={e => this.handleChange('password', e)} />
        <button type="submit">Register</button>
      </form>
    );
  }
}
