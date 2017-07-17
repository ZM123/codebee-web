import './Header.scss';

import * as React from 'react';
import * as classnames from 'classnames';
import { omit } from 'lodash';
import { Link, LinkProps, withRouter, RouteComponentProps } from 'react-router-dom';

const HeaderLink = withRouter((props: LinkProps & RouteComponentProps<any>) => {
  const { className } = props;
  const other: any = omit(props, 'className', 'match', 'location', 'history', 'staticContext');

  const selected = props.location.pathname == props.to;

  const cssClass = classnames('HeaderLink', className, {
    'HeaderLink--selected': selected
  });

  return <Link className={cssClass} {...other} />;
});

export default class Header extends React.Component {
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
