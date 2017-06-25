import './App.scss';

import * as React from 'react';
import { render } from 'react-dom';

import Example from './components/examples/Example';

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <Example />
    </div>
  );
};

// render
render(<App />, document.getElementById('app'));
