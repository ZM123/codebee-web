import './Header.scss';

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import * as classnames from 'classnames';
import { omit } from 'lodash';
import { Link, LinkProps, withRouter, RouteComponentProps } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  isAuthenticated: boolean;
}

interface Props {
  user: User;
}

const HeaderLink = withRouter((props: LinkProps & RouteComponentProps<any>) => {
  const { className } = props;
  const other: any = omit(props, 'className', 'match', 'location', 'history', 'staticContext');

  const selected = props.location.pathname == props.to;

  const cssClass = classnames('HeaderLink', className, {
    'HeaderLink--selected': selected
  });

  return <Link className={cssClass} {...other} />;
});

export class Header extends React.Component<Props> {
  render() {
    return (
      <div className="Header">
        <div className="Header-links">
          <HeaderLink to="/home">Home</HeaderLink>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/rules">Rules</HeaderLink>
          <HeaderLink to="/try">Try it out!</HeaderLink>
          <HeaderLink to="/home/login">Login</HeaderLink>
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(
  Header,
  graphql`
    fragment Header_user on User {
      id
      name
      isAuthenticated
    }
  `
);
