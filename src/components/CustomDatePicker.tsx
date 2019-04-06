import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import { Moment } from 'moment';
import moment from 'moment';

interface CustomDatePickerProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
}

class CustomDatePicker extends React.PureComponent<CustomDatePickerProps> {
  private onChange = (value: Moment) => {
    this.props.onChange(this.props.name, value.format());
  };

  render() {
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className="content-item">
          <DatePicker
            fullWidth
            autoOk
            label="Date of birth"
            value={this.props.value}
            disableFuture
            openTo="year"
            format={'DD/MM/YYYY'}
            views={['year', 'month', 'day']}
            onChange={this.onChange}
            maxDate={moment().subtract(18, 'years')}
          />
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}

export default CustomDatePicker;
