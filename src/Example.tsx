import * as React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import environment from './environment';

import UserList from './UserList';

export default class Example extends React.Component<any, any> {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ExampleQuery {
            viewer {
              ...UserList_viewer
            }
          }
        `}
        render={({error, props}: any) => {
          console.log('Render');
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            console.log(props);
            return (
              <div>
                <UserList viewer={props.viewer} />
              </div>
            );
          }
          return <div>Loading</div>
        }}
      />
    );
  }
}
