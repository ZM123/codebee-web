import { commitMutation, graphql } from 'react-relay';

import { getClientMutationId } from './MutationUtils';

interface RegistrationData {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
}

const mutation = graphql`
  mutation RegisterMutation(
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

export default function registerUser(environment: any, input: RegistrationData) {
  const variables = {
    input: {
      ...input,
      clientMutationId: getClientMutationId()
    }
  };
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onError: (err: any) => console.error(err)
    }
  );
}
