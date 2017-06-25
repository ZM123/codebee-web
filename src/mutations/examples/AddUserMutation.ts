import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation AddUserMutation(
    $input: RegisterInput!
  ) {
    register(input: $input) {
      user {
        id
        name
      }
      clientMutationId
    }
  }
`;

let temp = 0;

function addUser(environment: any, name: string) {
  const variables = {
    input: {
      name,
      email: name,
      username: name,
      password: name,
      clientMutationId: temp++
    }
  };
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onError: (err: any) => console.log(err)
    }
  );
}

export default addUser;
