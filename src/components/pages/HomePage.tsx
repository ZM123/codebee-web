import './HomePage.scss';

import * as React from 'react';
import * as classnames from 'classnames';
import { Link } from 'react-router-dom';

import Button from '../ui/Button';
import Fade from '../ui/animations/Fade';
import HomeDescription from '../HomeDescription';
import Logo from '../Logo/Logo';

interface State {
  showLogin: boolean;
  showRegister: boolean;
}

export default class HomePage extends React.Component<{}, State> {
  typingTimeout: number;

  state: State = {
    showLogin: false,
    showRegister: false,
  };

  componentWillUnmount() {
    window.clearTimeout(this.typingTimeout);
  }

  handleTypingComplete = () => {
    this.typingTimeout = window.setTimeout(() => {
      this.setState({ showLogin: true });

      this.typingTimeout = window.setTimeout(() => {
        this.setState({ showRegister: true });
      }, 200)
    }, 200);
  }

  render() {
    const buttonsCssClass = classnames('Homepage-buttons', {
      'Homepage-buttons--show-login': this.state.showLogin,
      'Homepage-buttons--show-register': this.state.showRegister
    });

    return (
      <div className="HomePage">
        <Fade appear={true}>
          <div className="HomePage-logo">
            <Logo />
            <HomeDescription onComplete={this.handleTypingComplete} />
          </div>
        </Fade>
        <div className={buttonsCssClass}>
          <span className="HomePage-buttons-login">
            <Link to="/login">
              <Button primary>Login</Button>
            </Link>
          </span>
          <span className="HomePage-buttons-register">
            <Link to="/register">
              <Button outline>Register</Button>
            </Link>
          </span>
        </div>
      </div>
    );
  }
}
