import { commitMutation, graphql } from 'react-relay';
import * as validator from 'validator';

import Environment from '../Environment';
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

export function validate(input: RegistrationData) {
  const errors: any = {};

  if (!input.name) {
    errors.name = 'What should we call you?';
  }

  if (!input.username) {
    errors.username = 'Pick a display name';
  }

  if (!input.email) {
    errors.email = `What's your email?`;
  } else if (!validator.isEmail(input.email)) {
    errors.email = `Oops, that's not a valid email`;
  }

  if (!input.password) {
    errors.password = 'You need a password';
  }

  return errors;
}

export function commit(input: RegistrationData): Promise<Object> {
  const variables = {
    input: {
      ...input,
      clientMutationId: getClientMutationId()
    }
  };
  return new Promise((resolve, reject) => {
    commitMutation(
      Environment,
      {
        mutation,
        variables,
        onCompleted: resolve,
        onError: reject
      }
    );
  });
}

export default {
  validate,
  commit
};
