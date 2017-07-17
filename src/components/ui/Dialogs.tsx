import './Dialogs.scss'

import * as React from 'react';
import * as classnames from 'classnames';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { last, omit, pick, uniqueId } from 'lodash';

import { openDialog, closeDialog, DialogOptions } from '../../actions/dialog';

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
    this.props.options.onClose && this.props.options.onClose();
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

/* Dialog Route HOC */
interface DialogRouteProps {
  onEnter: (node: any, options: DialogOptions) => void;
  onExit: (key: string) => void;
}

const ROUTE_COMPONENT_PROPS = ['match', 'location', 'history', 'staticContext'];
const ROUTE_PROPS = ['location', 'component', 'render', 'children', 'path', 'exact', 'strict'];

export function DialogRoute<P>(options: DialogOptions = {}) {
  return function(WrappedComponent: React.ComponentClass<P>): React.ComponentClass<P & RouteProps> {
    const DialogRouteComponent = class extends React.Component<P & RouteComponentProps<any> & DialogRouteProps> {
      key?: string;

      componentDidMount() {
        this.key = uniqueId('dialogroute_');
        const props = omit(this.props, ROUTE_PROPS, ROUTE_COMPONENT_PROPS, 'onEnter', 'onExit') as P;
        const dialogOptions = Object.assign({
          key: this.key,
          onClose: () => {
            const { location, history } = this.props;
            if (location.key == history.location.key) {
              history.goBack();
            }
          }
        } as DialogOptions, options);
        this.props.onEnter(<WrappedComponent {...props} />, dialogOptions);
      }

      componentWillUnmount() {
        this.handleClose();
      }

      handleClose = () => {
        if (this.key) {
          this.props.onExit(this.key);
          this.key = undefined;
        }
      }

      render() {
        return null;
      }
    };

    const mapDispatchToProps = (dispatch: Dispatch<any>) => {
      return {
        onEnter: (node: any, options: DialogOptions) => {
          dispatch(openDialog(node, options));
        },
        onExit: (key: string) => {
          dispatch(closeDialog(key));
        }
      };
    };

    const DialogRouteComponentContainer = connect(
      null,
      mapDispatchToProps
    )(DialogRouteComponent as any) as any;

    return class extends React.Component<P & DialogRouteProps & RouteProps> {
      render() {
        const props = pick(this.props, ROUTE_PROPS);
        return (
          <Route {...props} render={p => (
            <DialogRouteComponentContainer {...p} {...props} />
          )} />
        );
      }
    };
  }
}
