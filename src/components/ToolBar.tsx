import React from 'react';
import { Toolbar, Typography, Tooltip, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import classNames from 'classnames';

interface TableToolbarProps {
  numSelected: number;
  onDeleteClick: () => void;
}

class TableToolbar extends React.PureComponent<TableToolbarProps> {
  render() {
    return (
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
              <IconButton aria-label="Delete" onClick={this.props.onDeleteClick}>
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
    );
  }
}

export default TableToolbar;
