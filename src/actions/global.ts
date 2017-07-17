import { Action } from 'redux';

export const VIEWED_HOME = 'VIEWED_HOME';

export function setHomeViewed(): Action {
  return {
    type: VIEWED_HOME
  };
}
