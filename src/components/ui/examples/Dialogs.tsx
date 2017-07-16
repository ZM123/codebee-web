import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { openDialog } from '../../../actions/dialog';

import Button from '../Button';

interface Props {
  onOpenDialog: () => void;
}

const DialogsTest = (props: Props) => {
  return (
    <div className="Buttons">
      <Button primary raised onClick={props.onOpenDialog}>Open Dialog</Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onOpenDialog: () => {
      dispatch(openDialog(<div>Hello!</div>, {
        title: 'This is a dialog'
      }));

      window.setTimeout(() => {
        dispatch(openDialog(<div>And another one.</div>, {
          title: 'Another one'
        }));
      }, 2000);
    }
  };
};

const DialogsTestContainer = connect(
  null,
  mapDispatchToProps
)(DialogsTest);


export default DialogsTestContainer;
