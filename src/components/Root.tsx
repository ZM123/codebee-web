import * as React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import Environment from '../Environment';
import Registration from './Registration';

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
                <Registration />
              </div>
            );
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}
