import './Root.scss';

import * as React from 'react';

import Dialogs from './ui/Dialogs';
import Header from './Header';
import Router from './Router';

export default class Root extends React.Component {
  render() {
    return (
      <div className="Root">
        <Dialogs />
        <Header />
        <div className="Root-content">
          <Router />
        </div>
      </div>
    );
  }
}
