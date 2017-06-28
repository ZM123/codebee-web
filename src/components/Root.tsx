import * as React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { Route } from 'react-router-dom'

import Environment from '../Environment';
import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/HomePage';

export default class Root extends React.Component<any, any> {
  render() {
    return (
      <QueryRenderer
        environment={Environment}
        query={graphql`
          query RootQuery {
            hello
          }
        `}
        render={({ error, props }: any) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
              <div>
                <Route exact path="/" component={HomePage} />
                <Route path="/register" component={RegistrationPage} />
              </div>
            );
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}
