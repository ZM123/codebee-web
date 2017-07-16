import './Dialogs.scss'

import * as React from 'react';
import * as classnames from 'classnames';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { last } from 'lodash';

import { closeDialog, DialogOptions } from '../../actions/dialog';

import Fade from './animations/Fade';
import { MaterialIconButton } from './IconButton';

interface DialogsProps {
  dialogs: DialogOptions[];
  onClose: (key: string) => void;
}

interface DialogProps {
  options: DialogOptions;
  onClose: () => void;
}

class DialogOverlay extends React.Component<DialogProps> {
  render() {
    const { options, onClose } = this.props;

    const cssClass = classnames('DialogOverlay', {
      'DialogOverlay--opaque': options.opaque
    });

    const handleClick = () => {
      options.clickToClose && onClose();
    };

    return <div className={cssClass} onClick={handleClick} />;
  }
}

class Dialog extends React.Component<DialogProps> {
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { options } = this.props;
    const cssClass = classnames('Dialog', `Dialog--${options.size}`);
    return (
      <div className="DialogContainer">
        <DialogOverlay options={options} onClose={this.handleClose} />
        <div className={cssClass}>
          <div className="Dialog-header">
            <h1 className="Dialog-header-title">{options.title}</h1>
            <MaterialIconButton icon="close" onClick={this.handleClose} />
          </div>
          <div className="Dialog-body">
            {options.node}
          </div>
        </div>
      </div>
    )
  }
}

class Dialogs extends React.Component<DialogsProps> {
  static defaultProps: DialogsProps = {
    dialogs: [],
    onClose: () => {}
  };

  componentWillMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleClose = (key: string) => {
    this.props.onClose(key);
  };

  handleEscape = (event: KeyboardEvent) => {
    if (event.keyCode == 27) { // Escape keyCode
      const top = last(this.props.dialogs);
      if (top && top.escapeToClose) {
        this.handleClose(top.key!);
      }
    }
  };

  render() {
    const { dialogs } = this.props;
    const cssClass = classnames('Dialogs', {
      'Dialogs--hidden': dialogs.length == 0
    });
    return (
      <div className={cssClass}>
        <Fade>
          {dialogs.map(options => {
            return <Dialog key={options.key} options={options} onClose={() => this.handleClose(options.key!)} />;
          })}
        </Fade>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    dialogs: state.dialog
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onClose: (key: string) => {
      dispatch(closeDialog(key));
    }
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
