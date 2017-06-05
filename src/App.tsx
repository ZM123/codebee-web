import './App.scss';

import * as React from 'react';
import { render } from 'react-dom';

import { graphql } from 'react-relay';

const test = graphql`
  query AppQuery {
    hello
  }
`;

console.log(test);

const App = () => {
  return (
    <h1>Hello world!</h1>
  );
};

// render
render(<App />, document.getElementById('app'));
