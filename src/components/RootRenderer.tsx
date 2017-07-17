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
            viewer {
              ...Root_viewer
            }
          }
        `}
        render={({ error, props }: any) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <Root viewer={props.viewer} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}
