import * as uuid from 'uuid/v4';

export function getClientMutationId() {
  return uuid();
}
