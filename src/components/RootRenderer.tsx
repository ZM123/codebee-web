import * as React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import Environment from '../Environment';
import Root from './Root';

export default class RootRenderer extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={Environment}
        query={graphql`
          query RootRendererQuery {
            hello
          }
        `}
        render={({ error, props }: any) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
              <Root />
            );
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}
