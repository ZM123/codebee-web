import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const combinedReducers = combineReducers({
  form
});

const Store = createStore(combinedReducers);

export default Store;
