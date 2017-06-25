import './App.scss';

import * as React from 'react';
import { render } from 'react-dom';

import Example from './components/examples/Example';
import Root from './components/Root';

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <Example />
      <hr />
      <Root />
    </div>
  );
};

// render
render(<App />, document.getElementById('app'));
