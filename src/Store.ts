import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import dialog from './reducers/dialog';
import global from './reducers/global';

const combinedReducers = combineReducers({
  dialog,
  form,
  global
});

let __REDUX_DEVTOOLS_EXTENSION__ = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
__REDUX_DEVTOOLS_EXTENSION__ = __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__();

const Store = createStore(combinedReducers, __REDUX_DEVTOOLS_EXTENSION__);

export default Store;
