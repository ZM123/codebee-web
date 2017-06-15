import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

export interface User {
  id: string;
  name: string;
}

interface Props {
  user: User;
}

const UserListItem = (props: Props) => {
  console.log('UserListItem Render');
  const { id, name } = props.user;
  return <div>{id}: {name}</div>;
};

const container: React.ComponentClass<Props> = createFragmentContainer(
  UserListItem,
  graphql`
    fragment UserListItem_user on User {
      id
      name
    }
  `
);

export default container;
