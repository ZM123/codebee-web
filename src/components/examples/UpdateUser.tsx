import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

interface Props {
  onSubmit: (name: string) => void;
}

interface State {
  name: string;
}

class UpdateUser extends React.Component<Props, State> {
  state: State = {
    name: ''
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
  }

  handleChange = (e: any) => {
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>Update User</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
          <button type="submit">Update User</button>
        </form>
      </div>
    );
  }
}

export default UpdateUser;
