import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import { TableCell, Checkbox } from '@material-ui/core';
import { People } from '../types/people';
import moment from 'moment';

interface TableRowProps {
  isSelected: boolean;
  info: People;
  handleClick: (id: number) => void;
}

class TableRowInfo extends React.PureComponent<TableRowProps> {
  private handleClick = () => {
    this.props.handleClick(this.props.info.id);
  };

  render() {
    return (
      <TableRow
        hover
        role="checkbox"
        aria-checked={this.props.isSelected}
        tabIndex={-1}
        key={this.props.info.id}
        selected={this.props.isSelected}
      >
        <TableCell padding="checkbox" onClick={this.handleClick}>
          <Checkbox checked={this.props.isSelected} />
        </TableCell>
        <TableCell align="left">{this.props.info.name}</TableCell>
        <TableCell align="left">{this.props.info.surname}</TableCell>
        <TableCell align="left">{moment().diff(this.props.info.birthday, 'years')}</TableCell>
      </TableRow>
    );
  }
}

export default TableRowInfo;
