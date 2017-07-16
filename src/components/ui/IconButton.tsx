import './IconButton.scss';

import * as React from 'react';
import * as classnames from 'classnames';
import { omit } from 'lodash';

import { MaterialIcon } from './Icon';

interface IconButtonProps extends React.HTMLAttributes<any> {
  raised?: boolean;
  primary?: boolean;
  disabled?: boolean;
}

interface MaterialIconButtonProps extends IconButtonProps {
  icon: string;
}

export default class IconButton extends React.Component<IconButtonProps, {}> {
  static defaultProps: IconButtonProps = {
    raised: false,
    primary: false,
    disabled: false
  };

  getClassNames() {
    return {
      'IconButton--raised': this.props.raised,
      'IconButton--default': !this.props.primary,
      'IconButton--primary': this.props.primary,
      'IconButton--disabled': this.props.disabled,
    };
  }

  render() {
    const { className, children } = this.props;
    const other = omit(this.props, 'className', 'primary', 'raised');

    const cssClass = classnames('IconButton', className, this.getClassNames());

    return (
      <button className={cssClass} {...other}>
        {children}
      </button>
    );
  }
}

export const MaterialIconButton = (props: MaterialIconButtonProps) => {
  const { icon } = props;
  const other = omit(props, 'icon');
  return (
    <IconButton {...other}>
      <MaterialIcon icon={icon} />
    </IconButton>
  );
};
