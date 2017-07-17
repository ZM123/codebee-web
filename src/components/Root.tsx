import './Root.scss';

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { BrowserRouter } from 'react-router-dom';

import Dialogs from './ui/Dialogs';
import Header from './Header';
import Router from './Router';

interface Props {
  viewer: any;
}

export class Root extends React.Component<Props> {
  render() {
    const viewer = this.props.viewer;
    return (
      <BrowserRouter>
        <div className="Root">
          <Dialogs />
          <Header user={viewer.me} />
          <div className="Root-content">
            <Router />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default createFragmentContainer(
  Root,
  graphql`
    fragment Root_viewer on Viewer {
      me {
        ...Header_user
      }
    }
  `
);
