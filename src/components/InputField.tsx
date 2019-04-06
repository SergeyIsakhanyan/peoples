import React from 'react';
import { TextField } from '@material-ui/core';

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  error: boolean;
  autoFocus?: boolean;
  onChange: (name: string, value: string) => void;
}

class InputField extends React.PureComponent<InputFieldProps> {
  private onChange = (e: any) => {
    this.props.onChange(e.target.id, e.target.value);
  };

  render() {
    return (
      <TextField
        className="content-item"
        autoFocus={!!this.props.autoFocus}
        margin="dense"
        id={this.props.name}
        label={this.props.label}
        type="text"
        fullWidth
        onChange={this.onChange}
        value={this.props.value}
        error={this.props.error && !this.props.value}
        helperText={this.props.error && !this.props.value ? 'Field is Required!' : ''}
      />
    );
  }
}

export default InputField;
