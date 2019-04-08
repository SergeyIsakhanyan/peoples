import React from 'react';
import { Toolbar, Typography, Tooltip, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import classNames from 'classnames';
import '../styles/Toolbar.scss';
import ConfirmationDialog from './ConfirmationDialog';

interface TableToolbarProps {
  numSelected: number;
  onDeleteClick: () => void;
}

interface TableToolbarState {
  open: boolean;
}

class TableToolbar extends React.PureComponent<TableToolbarProps, TableToolbarState> {
  constructor(props: TableToolbarProps) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDelete = () => {
    this.props.onDeleteClick();
    this.handleClose();
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div>
        <ConfirmationDialog
          open={this.state.open}
          handleCancel={this.handleClose}
          handleDelete={this.handleDelete}
        />
        <Toolbar
          className={classNames({
            highlight: this.props.numSelected > 0,
            root: 'root',
          })}
        >
          <div className={'title'}>
            {this.props.numSelected > 0 ? (
              <Typography color="inherit" variant="subtitle1">
                {this.props.numSelected} selected
              </Typography>
            ) : (
              <Typography variant="h6" id="tableTitle">
                Peoples
              </Typography>
            )}
          </div>
          <div className={`spacer`} />
          <div className={`actions`}>
            {this.props.numSelected > 0 ? (
              <Tooltip title="Delete">
                <IconButton aria-label="Delete" onClick={this.handleOpen}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Filter list">
                <IconButton aria-label="Filter list">
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </Toolbar>
      </div>
    );
  }
}

export default TableToolbar;
