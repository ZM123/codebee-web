import './HomeDescription.scss';
import '../../node_modules/react-typist/dist/Typist.css';

import * as React from 'react';
import Typist from 'react-typist';

const cursor = {
  show: false
};

export default class HomeDescription extends React.Component {
  render() {
    return (
      <div className="HomeDescription">
        <Typist className="HomeDescription-text" avgTypingDelay={50} startDelay={500} cursor={cursor}>Code against the world!</Typist>
      </div>
    );
  }
}
