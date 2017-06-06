import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import UserListItem, { User } from './UserListItem';

interface Data {
  users: User[];
}

interface Props {
  data: Data;
}

const UserList = (props: Props) => {
  const { users } = props.data;
  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.map(user => <UserListItem user={user} />)}
      </div>
    </div>
  );
};

const container: React.ComponentClass<Props> = createFragmentContainer(
  UserList,
  graphql`
    fragment UserList on Query {
      users {
        id
        name
      }
    }
  `
);

export default container;
