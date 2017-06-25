import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import AddUserMutation from './mutations/AddUserMutation';
import UpdateUserMutation from './mutations/UpdateUserMutation';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import UserListItem, { User } from './UserListItem';

interface Data {
  users: {
    edges: {
      node: User
    }[]
  };
}

interface Props {
  data?: Data;
  viewer: Data;
}

const UserList = (props: Props) => {
  const { users } = props.viewer;

  const handleAddSubmit = (name: string) => {
    const p: any = props;
    console.log(p);
    AddUserMutation(
      p.relay.environment,
      name
    );
  };

  const handleUpdateSubmit = (name: string) => {
    const p: any = props;
    console.log(p);
    UpdateUserMutation(
      p.relay.environment,
      '1',
      name
    );
  };

  console.log('UserList Render');

  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.edges.map(edge => <UserListItem user={edge.node} key={edge.node.id} />)}
      </div>
      <AddUser onSubmit={handleAddSubmit} />
      <UpdateUser onSubmit={handleUpdateSubmit} />
    </div>
  );
};

const container: React.ComponentClass<Props> = createFragmentContainer(
  UserList,
  graphql`
    fragment UserList_viewer on Viewer {
      users {
        edges {
          node {
            id
            ...UserListItem_user
          }
        }
      }
    }
  `
);

export default container;
