import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import AddUserMutation from './mutations/AddUserMutation';
import UpdateUserMutation from './mutations/UpdateUserMutation';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import UserListItem, { User } from './UserListItem';

interface Data {
  users: User[];
  hello?: string;
}

interface Props {
  data?: Data;
  viewer: Data;
}

const UserList = (props: Props) => {
  const { users, hello } = props.viewer;

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
      <h1>{hello}</h1>
      <h1>Users</h1>
      <div>
        {users.map((user: any) => <UserListItem user={user} key={user.id} />)}
      </div>
      <AddUser onSubmit={handleAddSubmit} />
      <UpdateUser onSubmit={handleUpdateSubmit} />
    </div>
  );
};

const container: React.ComponentClass<Props> = createFragmentContainer(
  UserList,
  // graphql`
  //   fragment UserList_viewer on Viewer {
  //     hello
  //     users2 {
  //       edges {
  //         node {
  //           id
  //           ...UserListItem_user
  //         }
  //       }
  //     }
  //   }
  // `
  graphql`
    fragment UserList_viewer on Viewer {
      hello
      users {
        id
        ...UserListItem_user
      }
    }
  `
);

export default container;
