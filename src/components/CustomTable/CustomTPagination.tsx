import React from 'react';
import { TablePagination } from '@material-ui/core';
import { People } from '../../types/people';

export interface CustomTPaginationProps {
  data: People[];
  page: number;
  rowsPerPage: number;
  handleChangePage: (page: number) => void;
  handleChangeRowsPerPage: (value: any) => void;
}

export default class CustomTPagination extends React.PureComponent<CustomTPaginationProps> {
  private handlePageChange = (event: any, page: number) => {
    this.props.handleChangePage(page);
  };

  private handleChangeRowsPerPage = (e: any) => {
    this.props.handleChangeRowsPerPage(e.target.value);
  };

  render() {
    const { data, page, rowsPerPage } = this.props;
    return (
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
        onChangePage={this.handlePageChange}
        onChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
    );
  }
}
