import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation AddUserMutation(
    $input: UserInput!
  ) {
    createUser(input: $input) {
      user {
        id
        name
      }
      clientMutationId
      viewer {
        users {
          id
          name
        }
      }
    }
  }
`;

let temp = 0;

function addUser(environment: any, name: string) {
  const variables = {
    input: {
      name,
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
