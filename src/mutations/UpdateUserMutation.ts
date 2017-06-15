import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation UpdateUserMutation(
    $input: UpdateUserInput!
  ) {
    updateUser(input: $input) {
      id
      name
      clientMutationId
    }
  }
`;

let temp = 0;

function updateUser(environment: any, id: string, name: string) {
  const variables = {
    input: {
      id,
      name,
      clientMutationId: temp++
    }
  };
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response: any) => {
        console.log('User update complete', response);
      },
      onError: (err: any) => console.log(err)
    }
  );
}

export default updateUser;
