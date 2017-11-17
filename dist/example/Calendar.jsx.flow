import React, { Component } from 'react';
import moment from 'moment';

import Popover from '../components/Popover';
import Calendar from '../experimentals/Calendar';

class CalendarExample extends Component {
  state = {
    current: moment(),
  };
  onMonthClick = (e, m) => this.setState({ current: m });
  onClick = () => this.setState({ active: !this.state.active });
  render() {
    const { current } = this.state;
    return (
      <Popover target={<div>PopOver</div>} bottom>
        <Calendar
          current={current}
          onMonthClick={this.onMonthClick}
          onDateClick={this.onClick}
          weekdays={moment().localeData().weekdaysShort()}
        />
      </Popover>
    );
  }
}

export default CalendarExample;
