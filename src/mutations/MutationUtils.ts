import { uniqueId } from 'lodash';

export function getClientMutationId() {
  return uniqueId();
}
