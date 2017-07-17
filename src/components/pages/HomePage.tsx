import './HomePage.scss';

import * as React from 'react';
import * as classnames from 'classnames';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link, Route, RouteComponentProps } from 'react-router-dom';

import { setHomeViewed } from '../../actions/global';

import Button from '../ui/Button';
import { DialogRoute } from '../ui/Dialogs';
import Fade from '../ui/animations/Fade';
import HomeCards from '../HomeCards';
import HomeDescription from '../HomeDescription';
import Logo from '../Logo/Logo';
import Login from '../Login';
import Registration from '../Registration';

interface Props {
  animations: boolean;
  onHomeViewed: () => void;
}

interface State {
  mounted: boolean;
  showLogin: boolean;
  showRegister: boolean;
  loaded: boolean;
}

const LoginDialog = DialogRoute({
  clickToClose: false,
  escapeToClose: false,
  size: 'Small',
  title: 'Login'
})(Login);

const RegistrationDialog = DialogRoute({
  clickToClose: false,
  escapeToClose: false,
  size: 'Small',
  title: 'Create an account'
})(Registration);

export class HomePage extends React.Component<Props & RouteComponentProps<any>, State> {
  state: State = {
    mounted: false,
    showLogin: false,
    showRegister: false,
    loaded: false
  };

  animTimeout: number;

  componentDidMount() {
    if (this.props.animations) {
      this.setState({ mounted: true }); // Need to render logo animation after mounting, no idea why :(
      this.props.onHomeViewed();
    } else {
      this.setState({
        mounted: true,
        showLogin: true,
        showRegister: true,
        loaded: true
      });
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.animTimeout);
  }

  handleTypingComplete = () => {
    this.animTimeout = window.setTimeout(() => {
      this.setState({ showLogin: true });
    }, 200);
  }

  handleButtonEntered = (loaded: boolean = false) => {
    this.setState({
      showRegister: true,
      loaded
    });
  };

  render() {
    const { match } = this.props;

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
          {
            this.state.mounted
            ? (
              <Fade appear duration="Long">
                <div className="HomePage-logo">
                  <Logo />
                  <HomeDescription onComplete={this.handleTypingComplete} />
                </div>
              </Fade>
            ) :
            null
          }
          <div className={buttonsCssClass}>
            {
              this.state.showLogin
              ? (
                <Fade appear onEntered={() => this.handleButtonEntered()}>
                  <Link to={`${match.url}/login`}>
                    <Button primary>Login</Button>
                  </Link>
                </Fade>
              )
              : <div className="HomePage-buttons-placeholder" />
            }
            {
              this.state.showRegister
              ? (
                <Fade appear onEntered={() => this.handleButtonEntered(true)}>
                  <Link to={`${match.url}/register`}>
                    <Button outline>Register</Button>
                  </Link>
                </Fade>
              )
              : <div className="HomePage-buttons-placeholder" />
            }
          </div>
        </div>
        <hr className="HomePage-divider" />
        <div className="HomePage-bottom">
          <div className="HomePage-cards">
            <HomeCards />
          </div>
        </div>
        <LoginDialog path={`${match.url}/login`} />
        <RegistrationDialog path={`${match.url}/register`} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    animations: !state.global.homeViewed
  };
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onHomeViewed: () => {
      dispatch(setHomeViewed());
    }
  };
}

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;
