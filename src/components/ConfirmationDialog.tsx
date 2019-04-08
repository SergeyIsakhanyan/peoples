import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

interface ConfirmationDialogProps {
  open: boolean;
  handleCancel: () => void;
  handleDelete: () => void;
}

class ConfirmationDialog extends React.Component<ConfirmationDialogProps> {
  render() {
    return (
      <Dialog
        open={this.props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ textAlign: 'center', minWidth: 210 }} id="alert-dialog-title">
          {`Delete selected?`}
        </DialogTitle>
        <DialogActions>
          <Button onClick={this.props.handleCancel} color="primary">
            {`Cancel`}
          </Button>
          <Button onClick={this.props.handleDelete} color="primary" autoFocus>
            {`Ok`}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ConfirmationDialog;
