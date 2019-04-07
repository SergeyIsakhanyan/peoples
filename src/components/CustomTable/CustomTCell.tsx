import React from 'react';
import { TableCell, TextField } from '@material-ui/core';
import '../../styles/TextField.scss';
import classNames from 'classnames';

export interface CustomTCellProps {
  cellId: string;
  value: string | number;
  handleCellChange: (cellId: string, value: string | number) => void;
}

export interface CustomTCellState {
  isEditing: boolean;
  value: string | number;
}

export default class CustomTCell extends React.PureComponent<CustomTCellProps, CustomTCellState> {
  constructor(props: CustomTCellProps) {
    super(props);
    this.state = {
      isEditing: false,
      value: this.props.value,
    };
  }

  private handleDoubleClick = () => {
    this.setState({
      isEditing: true,
    });
  };

  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
  };

  private handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      //console.log('enter');
      this.props.handleCellChange(this.props.cellId, this.state.value);
      this.setState({
        isEditing: false,
      });
    } else if (e.keyCode === 27) {
      //console.log('esc');
      this.props.handleCellChange(this.props.cellId, this.props.value);
      this.setState({
        isEditing: false,
        value: this.props.value,
      });
    }
  };

  render() {
    return (
      <TableCell align="left" className="cell" onDoubleClick={this.handleDoubleClick}>
        {this.state.isEditing ? (
          <TextField
            autoFocus={true}
            fullWidth={false}
            className={classNames('text-field', {
              editing: this.state.isEditing,
            })}
            value={this.state.value}
            type={Number(this.props.value) ? 'number' : 'text'}
            onChange={this.onChange}
            onKeyDown={this.handleKeyDown}
          />
        ) : (
          `${this.props.value}`
        )}
      </TableCell>
    );
  }
}
