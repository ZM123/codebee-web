import './Fade.scss';

import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

interface Props {
  appear?: boolean;
}

export default class Fade extends React.Component<Props> {
  static defaultProps: Props = {
    appear: false
  };

  render() {
    const { appear } = this.props;
    return (
      <CSSTransitionGroup
        transitionName='fade'
        transitionAppear={appear}
        transitionEnter={!appear}
        transitionLeave={!appear}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {this.props.children}
      </CSSTransitionGroup>
    );
  }
}
