import * as React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import environment from './environment';

import UserList from './UserList';

export default () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query ExampleQuery {
        hello
        ...UserList
      }
    `}
    render={({error, props}: any) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        console.log(props);
        return (
          <div>
            <h1>{props.hello}</h1>
            <UserList data={props} />
          </div>
        );
      }
      return <div>Loading</div>
    }}
  />
);
