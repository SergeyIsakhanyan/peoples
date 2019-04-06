import React from 'react';
import { Button, Fab, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import '../styles/AddRow.scss';
import moment from 'moment';
import { People } from '../types/people';
import InputField from './InputField';
import CustomDatePicker from './CustomDatePicker';

const defaultInfo = {
  isSelected: false,
  id: 0,
  name: '',
  surname: '',
  birthday: moment()
    .subtract(18, 'years')
    .format(),
};

interface AddRowProps {
  id: number;
  onAdd: (info: People) => void;
}

interface AddRowState {
  showDialog: boolean;
  error: boolean;
  info: People;
}

class AddRow extends React.PureComponent<AddRowProps, AddRowState> {
  constructor(props: AddRowProps) {
    super(props);
    this.state = {
      showDialog: false,
      error: false,
      info: { ...defaultInfo, id: this.props.id },
    };
  }
  private onClick = () => {
    this.setState({
      showDialog: true,
    });
  };

  private handleClose = () => {
    this.setState({
      showDialog: false,
      info: defaultInfo,
    });
  };

  private onChange = (name: string, value: string) => {
    this.setState(prevState => ({
      info: {
        ...prevState.info,
        [name]: value,
      },
    }));
  };

  private onAdd = () => {
    let { name, surname } = this.state.info;
    if (!name || !surname) {
      this.setState({
        error: true,
      });
    } else {
      this.props.onAdd({ ...this.state.info, id: this.props.id });
      this.handleClose();
    }
  };

  render() {
    return (
      <div>
        <Fab color="primary" aria-label="Add" className={`fabButton`} onClick={this.onClick}>
          <AddIcon />
        </Fab>
        <Dialog open={this.state.showDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">{`Add new person`}</DialogTitle>
          <DialogContent>
            <InputField
              autoFocus={true}
              label={`Name`}
              value={this.state.info.name}
              name="name"
              error={this.state.error}
              onChange={this.onChange}
            />
            <InputField
              label={`Surname`}
              value={this.state.info.surname}
              name="surname"
              error={this.state.error}
              onChange={this.onChange}
            />
            <CustomDatePicker
              label="Date of birth"
              name="birthday"
              value={this.state.info.birthday}
              onChange={this.onChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              {`Cancel`}
            </Button>
            <Button onClick={this.onAdd} color="primary">
              {`Add`}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddRow;
