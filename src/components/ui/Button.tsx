import './Button.scss';

import * as React from 'react';
import * as classnames from 'classnames';
import { omit } from 'lodash';

interface ButtonProps extends React.HTMLProps<any> {
  type?: string;
  raised?: boolean;
  primary?: boolean;
  outline?: boolean;
  disabled?: boolean;
  shape?: 'Circular' | 'Rectangular' | 'Round';
}

interface ButtonState {
  hover?: boolean;
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
  static defaultProps: ButtonProps = {
    type: 'button',
    raised: false,
    primary: false,
    outline: false,
    disabled: false,
    shape: 'Circular'
  };

  state: ButtonState = {
    hover: false
  };

  componentWillReceiveProps(nextProps: ButtonProps) {
    if (!this.props.disabled && nextProps.disabled) {
      this.setState({ hover: false });
    }
  }

  handleMouseOver = () => {
    this.setState({ hover: true });
  };

  handleMouseOut = () => {
    this.setState({ hover: false });
  };

  getClassNames() {
    return {
      'Button--hover': this.state.hover,
      'Button--raised': this.props.raised,
      'Button--default': !this.props.primary,
      'Button--primary': this.props.primary,
      'Button--outline': this.props.outline,
      'Button--disabled': this.props.disabled,
      [`Button--${this.props.shape}`]: true
    };
  }

  render() {
    const { className, children } = this.props;
    const other = omit(this.props, 'className', 'primary', 'raised', 'outline', 'shape');

    const cssClass = classnames('Button', className, this.getClassNames());

    return (
      <button className={cssClass} {...other} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        {children}
      </button>
    );
  }
}
