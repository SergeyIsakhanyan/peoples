import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableRowInfo from '../../components/TableRow';
import { People, OrderByTypes } from '../../types/people';
import TableHeader from '../../components/TableHeader';
import TableToolbar from '../../components/ToolBar';
import { sortTable, getSelectedItemsCount } from '../../utils/tableUtils';
import { data } from '../../constants/tempConstValues';

interface EnhancedTableState {
  order: string;
  orderBy: OrderByTypes;
  data: any;
  page: number;
  rowsPerPage: number;
  isAllSelected: boolean;
  isOneChecked: boolean;
}

class EnhancedTable extends React.Component<{}, EnhancedTableState> {
  state = {
    order: 'asc',
    orderBy: 'name' as OrderByTypes,
    data: data,
    page: 0,
    rowsPerPage: 5,
    isAllSelected: false,
    isOneChecked: false,
  };

  handleRequestSort = (event: any, property: OrderByTypes) => {
    const orderBy = property;
    let order = 'desc';
    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }
    this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event: any) => {
    const { data } = this.state;
    let newData = data.map(item => {
      return {
        ...item,
        isSelected: event.target.checked,
      };
    });
    this.setState({ data: newData, isAllSelected: event.target.checked, isOneChecked: false });
  };

  handleClick = (id: number) => {
    const { data } = this.state;
    let newData = data.map(item => {
      return id === item.id ? { ...item, isSelected: !item.isSelected } : item;
    });
    let unCheckedIndex = newData.findIndex(item => !item.isSelected);
    let checkedIndex = newData.findIndex(item => item.isSelected);
    this.setState({
      data: newData,
      isAllSelected: unCheckedIndex === -1,
      isOneChecked: checkedIndex !== -1 && unCheckedIndex !== -1,
    });
  };

  handleChangePage = (event: any, page: any) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event: { target: { value: any } }) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { data, order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={`classes.root`}>
        <TableToolbar numSelected={getSelectedItemsCount(data)} />
        <div className={`classes.tableWrapper`}>
          <Table className={`classes.table`} aria-labelledby="tableTitle">
            <TableHeader
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
              isAllSelected={this.state.isAllSelected}
              isOneChecked={this.state.isOneChecked}
            />
            <TableBody>
              {sortTable(data, this.state.order, this.state.orderBy)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((n: People) => {
                  return (
                    <TableRowInfo
                      key={n.id}
                      isSelected={n.isSelected}
                      info={n}
                      handleClick={this.handleClick}
                    />
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

export default EnhancedTable;
