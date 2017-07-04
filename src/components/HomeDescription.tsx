import './HomeDescription.scss';
import '../../node_modules/react-typist/dist/Typist.css';

import * as React from 'react';
import Typist from 'react-typist';

interface Props {
  onComplete?: () => void;
}

const cursor = {
  show: false
};

export default class HomeDescription extends React.Component<Props> {
  static defaultProps: Props = {
    onComplete: () => {}
  };

  render() {
    const { onComplete } = this.props;
    return (
      <div className="HomeDescription">
        <Typist
          className="HomeDescription-text"
          avgTypingDelay={50}
          stdTypingDelay={0}
          startDelay={500}
          cursor={cursor}
          onTypingDone={() => onComplete && onComplete()}
        >
          Code against the world!
        </Typist>
      </div>
    );
  }
}
