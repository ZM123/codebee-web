import './Fade.scss';

import * as React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import { EnterHandler, ExitHandler } from 'react-transition-group/Transition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { pick } from 'lodash';

interface Props {
  appear?: boolean;
  duration?: 'Short' | 'Long';
  /* TransitionProps */
  onEnter?: EnterHandler;
  onEntering?: EnterHandler;
  onEntered?: EnterHandler;
  onExit?: ExitHandler;
  onExiting?: ExitHandler;
  onExited?: ExitHandler;
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
    const handlers = pick(this.props, 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited');
    const timeout = DURATION_MAP[duration!];
    return (
      <TransitionGroup>
        {React.Children.map(this.props.children, child => {
          const key = (child as React.ReactElement<any>).key!;
          return (
            <CSSTransition
              appear={appear}
              enter={!appear}
              exit={!appear}
              key={key}
              classNames={`fade-${duration!.toLowerCase()}`}
              timeout={timeout}
              {...handlers}
            >
              {child}
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }
}
