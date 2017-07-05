import { commitMutation, graphql } from 'react-relay';
import * as validator from 'validator';

import Environment from '../Environment';
import { getClientMutationId } from './MutationUtils';

interface LoginData {
  email?: string;
  password?: string;
}

const mutation = graphql`
  mutation LoginMutation(
    $input: LoginInput!
  ) {
    login(input: $input) {
      user {
        id
        name
      }
      clientMutationId
    }
  }
`;

export function validate(input: LoginData) {
  const errors: any = {};

  if (!input.email) {
    errors.email = `What's your email?`;
  } else if (!validator.isEmail(input.email)) {
    errors.email = `Oops, that's not a valid email`;
  }

  if (!input.password) {
    errors.password = 'Enter your password';
  }

  return errors;
}

export function commit(input: LoginData): Promise<Object> {
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
