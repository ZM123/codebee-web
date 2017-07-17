import { Action } from 'redux';
import { uniqueId } from 'lodash';

export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';

export interface DialogOptions {
  node?: any;
  key?: string;
  clickToClose?: boolean;
  escapeToClose?: boolean;
  opaque?: boolean;
  title?: string;
  size?: 'Small' | 'Medium' | 'Large';
  onClose?: () => void;
}

export interface DialogAction extends Action {
  options: DialogOptions;
}

export interface CloseDialogAction extends Action {
  key?: string;
}

const DEFAULT_OPTIONS: DialogOptions = {
  title: '',
  size: 'Medium',
  opaque: true,
  clickToClose: true,
  escapeToClose: true,
  onClose: () => {}
}

export function openDialog(node: any, options = DEFAULT_OPTIONS): DialogAction {
  if (options != DEFAULT_OPTIONS) {
    options = Object.assign({}, DEFAULT_OPTIONS, options);
  }
  options.node = node;
  options.key = options.key || uniqueId('dialog_');
  return {
    type: OPEN_DIALOG,
    options
  };
}

export function closeDialog(key?: string): CloseDialogAction {
  return {
    type: CLOSE_DIALOG,
    key
  };
}

