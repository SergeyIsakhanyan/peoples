import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import { TableCell, Checkbox } from '@material-ui/core';
import { People } from '../types/people';
import moment from 'moment';
import CustomTCell from './CustomTable/CustomTCell';

interface TableRowProps {
  isSelected: boolean;
  info: People;
  handleClick: (id: number) => void;
  onCellChange: (info: People) => void;
}

class TableRowInfo extends React.PureComponent<TableRowProps> {
  private handleClick = () => {
    this.props.handleClick(this.props.info.id);
  };

  private handleCellChange = (cellId: string, value: string | number) => {
    if (cellId === 'birthday') {
      value = moment()
        .subtract(value, 'years')
        .format();
    }
    this.props.onCellChange({ ...this.props.info, [cellId]: value });
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
        <CustomTCell value={this.props.info.name} cellId={'name'} handleCellChange={this.handleCellChange} />
        <CustomTCell
          value={this.props.info.surname}
          cellId={'surname'}
          handleCellChange={this.handleCellChange}
        />
        <CustomTCell
          value={moment().diff(this.props.info.birthday, 'years')}
          cellId={'birthday'}
          handleCellChange={this.handleCellChange}
        />
      </TableRow>
    );
  }
}

export default TableRowInfo;
