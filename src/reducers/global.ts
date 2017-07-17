import { Action } from 'redux';

import { VIEWED_HOME } from '../actions/global';

interface GlobalState {
  homeViewed: boolean;
}

const DEFAULT_STATE: GlobalState = {
  homeViewed: false
};

export default function reducer(state: GlobalState = DEFAULT_STATE, action: Action) {
  switch (action.type) {
    case VIEWED_HOME:
      return Object.assign({}, state, {
        homeViewed: true
      });
    default:
      return state;
  }
};
