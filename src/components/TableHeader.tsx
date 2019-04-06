import React from 'react';
import { TableHead, TableRow, TableCell, Checkbox, Tooltip, TableSortLabel } from '@material-ui/core';
import { OrderByTypes } from '../types/people';
import { rows } from '../constants/tempConstValues';

interface EnhancedTableHeadProps {
  onSelectAllClick: any;
  order: any;
  orderBy: OrderByTypes;
  rowCount: any;
  isAllSelected: boolean;
  isOneChecked: boolean;
  onRequestSort: (event: any, property: OrderByTypes) => void;
}

class TableHeader extends React.Component<EnhancedTableHeadProps> {
  createSortHandler = (property: any) => (event: any) => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy }: any = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={this.props.isOneChecked}
              checked={this.props.isAllSelected}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip title="Sort" placement={'bottom-start'} enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    );
  }
}

export default TableHeader;
