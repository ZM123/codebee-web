import './App.scss';

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { combineReducers } from 'redux';

import RootRenderer from './components/RootRenderer';
import Store from './Store';

render((
  <Provider store={Store}>
    <RootRenderer />
  </Provider>
), document.getElementById('app'));
