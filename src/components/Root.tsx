import * as React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { Route } from 'react-router-dom'

import Environment from '../Environment';
import Router from './Router';

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
              <Router />
            );
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}
