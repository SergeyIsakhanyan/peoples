import React from 'react';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import TableRowInfo from '../TableRow';
import { sortTable } from '../../utils/tableUtils';
import { People, OrderByTypes } from '../../types/people';

export interface CustomTBodyProps {
  data: People[];
  order: string;
  orderBy: OrderByTypes;
  page: number;
  rowsPerPage: number;
  emptyRows: number;
  handleClick: (id: number) => void;
}

export default class CustomTBody extends React.PureComponent<CustomTBodyProps> {
  render() {
    const { data, order, orderBy, page, rowsPerPage, emptyRows } = this.props;
    return (
      <TableBody>
        {sortTable(data, order, orderBy)
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((n: People) => {
            return (
              <TableRowInfo
                key={n.id}
                isSelected={n.isSelected}
                info={n}
                handleClick={this.props.handleClick}
              />
            );
          })}
        {emptyRows > 0 && (
          <TableRow style={{ height: 49 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
    );
  }
}
