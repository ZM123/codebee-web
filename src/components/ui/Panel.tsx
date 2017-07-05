import './Panel.scss';

import * as React from 'react';
import * as classnames from 'classnames';
import { omit } from 'lodash';

type PanelProps = React.HTMLAttributes<any>;

const Panel = (props: PanelProps) => {
  const cssClass = classnames('Panel', props.className);
  const other = omit(props, 'className');
  return (
    <div className={cssClass} {...other}>
      {props.children}
    </div>
  );
};

export default Panel;
