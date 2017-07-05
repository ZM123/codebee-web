import './LinearProgress.scss';

import * as React from 'react';
import * as classnames from 'classnames';
import { omit } from 'lodash';

interface Props extends React.HTMLAttributes<any> {
  enabled?: boolean;
}

export default class LinearProgress extends React.Component<Props, {}> {
  static defaultProps: Props = {
    enabled: false
  };

  render() {
    const { className, enabled } = this.props;
    const other = omit(this.props, 'className', 'enabled');

    const cssClass = classnames('LinearProgress', className, {
      'LinearProgress--enabled': enabled
    });

    return (
      <div className={cssClass} {...other}>
        <div className="LinearProgress-progress"></div>
        <div className="LinearProgress-progress"></div>
        <div className="LinearProgress-progress"></div>
      </div>
    );
  }
}
