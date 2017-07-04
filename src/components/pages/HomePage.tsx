import './HomePage.scss';

import * as React from 'react';

import Button from '../ui/Button';
import HomeDescription from '../HomeDescription';
import Logo from '../Logo/Logo';

interface State {
  showButtons: boolean;
}

export default class HomePage extends React.Component<undefined, State> {
  state: State = {
    showButtons: false
  };

  handleTypingComplete = () => {
    setTimeout(() => {
      this.setState({ showButtons: true });
    }, 200);
  }

  render() {
    return (
      <div className="HomePage">
        <div className="HomePage-logo">
          <Logo />
          <HomeDescription onComplete={this.handleTypingComplete} />
        </div>
        <div className="Homepage-buttons">
          {
            this.state.showButtons
            ? (
                <span>
                  <Button primary>Login</Button>
                  <Button outline>Register</Button>
                </span>
              )
            : null
          }
        </div>
      </div>
    );
  }
}
