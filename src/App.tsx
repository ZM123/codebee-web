import './App.scss';

import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

import Store from './Store';
import RootRenderer from './components/RootRenderer';

render((
  <BrowserRouter>
    <Provider store={Store}>
      <RootRenderer />
    </Provider>
  </BrowserRouter>
), document.getElementById('app'));
