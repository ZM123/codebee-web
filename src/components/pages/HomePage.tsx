import './HomePage.scss';

import * as React from 'react';
import * as classnames from 'classnames';
import { Link } from 'react-router-dom';

import Button from '../ui/Button';
import Fade from '../ui/animations/Fade';
import HomeCards from '../HomeCards';
import HomeDescription from '../HomeDescription';
import Logo from '../Logo/Logo';

interface State {
  showLogin: boolean;
  showRegister: boolean;
  loaded: boolean;
}

export default class HomePage extends React.Component<{}, State> {
  animTimeout: number;

  state: State = {
    showLogin: false,
    showRegister: false,
    loaded: false
  };

  componentWillUnmount() {
    window.clearTimeout(this.animTimeout);
  }

  handleTypingComplete = () => {
    this.animTimeout = window.setTimeout(() => {
      this.setState({ showLogin: true });

      this.animTimeout = window.setTimeout(() => {
        this.setState({ showRegister: true });

        this.animTimeout = window.setTimeout(() => {
          this.setState({ loaded: true });
        }, 200);
      }, 200)
    }, 200);
  }

  render() {
    const cssClass = classnames('HomePage', {
      'HomePage--loaded': this.state.loaded
    });

    const buttonsCssClass = classnames('HomePage-buttons', {
      'HomePage-buttons--show-login': this.state.showLogin,
      'HomePage-buttons--show-register': this.state.showRegister
    });

    return (
      <div className={cssClass}>
        <div className="HomePage-top">
          <Fade appear={true} duration="Long">
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
        <hr className="HomePage-divider" />
        <div className="HomePage-bottom">
          <div className="HomePage-cards">
            <HomeCards />
          </div>
        </div>
      </div>
    );
  }
}
