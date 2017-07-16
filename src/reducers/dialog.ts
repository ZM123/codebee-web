import { Action } from 'redux';

import { OPEN_DIALOG, CLOSE_DIALOG, DialogAction, CloseDialogAction, DialogOptions } from '../actions/dialog';

type DialogState = DialogOptions[];

function openDialog(state: DialogState, options: DialogOptions): DialogState {
  return state.concat([options]);
}

function closeDialog(state: DialogState, key?: string) {
  if (key) {
    return state.filter(dialog => dialog.key != key);
  } else {
    return state.slice(0, -1);
  }
}

export default function reducer(state: DialogState = [], action: Action) {
  switch (action.type) {
    case OPEN_DIALOG:
      return openDialog(state, (action as DialogAction).options);
    case CLOSE_DIALOG:
      return closeDialog(state, (action as CloseDialogAction).key);
    default:
      return state;
  }
};
