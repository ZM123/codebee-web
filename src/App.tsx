import './App.scss';

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import { combineReducers } from 'redux';

import RootRenderer from './components/RootRenderer';
import Store from './Store';

render((
  <BrowserRouter>
    <Provider store={Store}>
      <RootRenderer />
    </Provider>
  </BrowserRouter>
), document.getElementById('app'));
