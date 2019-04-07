import React from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { People, OrderByTypes } from '../../types/people';
import TableHeader from '../../components/TableHeader';
import TableToolbar from '../../components/ToolBar';
import { getSelectedItemsCount, getNextElId } from '../../utils/tableUtils';
import AddRow from '../../components/AddRow';
import CustomTBody from '../../components/CustomTable/CustomTBody';
import CustomTPagination from '../../components/CustomTable/CustomTPagination';

interface DataTableState {
  order: string;
  orderBy: OrderByTypes;
  page: number;
  rowsPerPage: number;
  isAllSelected: boolean;
  isOneChecked: boolean;
  nextRowId: number;
}

export interface DataTableProps {
  data: People[];
  addPerson: (info: People) => void;
  updatePersonData: (info: People) => void;
  removePerson: () => void;
  saveData: (data: People[]) => void;
  routePush?: (location: string) => void;
}

class DataTable extends React.Component<DataTableProps, DataTableState> {
  static getDerivedStateFromProps(newProps: DataTableProps, prevState: DataTableState) {
    if (newProps.data.length) {
      return {
        ...prevState,
        nextRowId: getNextElId(newProps.data),
      };
    }
    return null;
  }

  constructor(props: DataTableProps) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'name' as OrderByTypes,
      page: 0,
      rowsPerPage: 5,
      isAllSelected: false,
      isOneChecked: false,
      nextRowId: getNextElId(this.props.data),
    };
  }

  handleRequestSort = (event: any, property: OrderByTypes) => {
    const orderBy = property;
    let order = 'desc';
    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }
    this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event: any) => {
    const { data } = this.props;
    let newData = data.map(item => {
      return {
        ...item,
        isSelected: event.target.checked,
      };
    });
    this.props.saveData(newData);
    this.setState({ isAllSelected: event.target.checked, isOneChecked: false });
  };

  handleClick = (id: number) => {
    const { data } = this.props;
    let info = data.find(item => item.id === id);
    if (info) {
      info.isSelected = !info.isSelected;
      this.props.updatePersonData(info);
    }
    let unCheckedIndex = data.findIndex(item => !item.isSelected);
    let checkedIndex = data.findIndex(item => item.isSelected);
    this.setState({
      isAllSelected: unCheckedIndex === -1,
      isOneChecked: checkedIndex !== -1 && unCheckedIndex !== -1,
    });
  };

  handleChangePage = (page: number) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (value: any) => {
    this.setState({ rowsPerPage: value });
  };

  onAddRow = (info: People) => {
    this.props.addPerson(info);
  };

  onDeleteRowClick = () => {
    this.props.removePerson();
    this.setState({
      isAllSelected: false,
      isOneChecked: false,
    });
  };

  render() {
    const data = this.props.data;
    const { order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <div>
        <Paper className={`classes.root`}>
          <TableToolbar numSelected={getSelectedItemsCount(data)} onDeleteClick={this.onDeleteRowClick} />
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
              <CustomTBody
                data={this.props.data}
                order={this.state.order}
                orderBy={this.state.orderBy}
                page={this.state.page}
                rowsPerPage={this.state.rowsPerPage}
                emptyRows={emptyRows}
                handleClick={this.handleClick}
              />
            </Table>
          </div>
          <CustomTPagination
            data={this.props.data}
            page={this.state.page}
            rowsPerPage={this.state.rowsPerPage}
            handleChangePage={this.handleChangePage}
            handleChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
        <AddRow id={this.state.nextRowId} onAdd={this.onAddRow} />
      </div>
    );
  }
}

export default DataTable;
