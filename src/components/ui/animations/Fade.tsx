import './Fade.scss';

import * as React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { uniqueId } from 'lodash';

interface Props {
  appear?: boolean;
  duration?: 'Short' | 'Long';
}

const DURATION_MAP = {
  Short: 200,
  Long: 500
}

export default class Fade extends React.Component<Props> {
  static defaultProps: Props = {
    appear: false,
    duration: 'Short'
  };

  render() {
    const { appear, duration } = this.props;
    const timeout = DURATION_MAP[duration!];
    return (
      <TransitionGroup>
        {React.Children.map(this.props.children, (child, i) => (
          <CSSTransition
            appear={appear}
            enter={!appear}
            exit={!appear}
            key={(child as React.ReactElement<any>).key!}
            classNames={`fade-${duration!.toLowerCase()}`}
            timeout={timeout}
          >
            {child}
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}
