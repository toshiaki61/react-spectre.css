import React, { Component } from 'react';
import moment from 'moment';

import Popover from '../components/Popover';
import Calendar from '../experimentals/Calendar';

class CalendarExample extends Component {
  state = {
    current: moment(),
  };
  onPrevMonthClick = () => this.setState({ current: this.state.current.add(-1, 'month') });
  onNextMonthClick = () => this.setState({ current: this.state.current.add(1, 'month') });
  onClick = () => this.setState({ active: !this.state.active });
  render() {
    const { current } = this.state;
    return (
      <Popover target={<div>PopOver</div>} bottom>
        <Calendar
          current={current}
          onPrevMonthClick={this.onPrevMonthClick}
          onNextMonthClick={this.onNextMonthClick}
          weekdays={moment().localeData().weekdaysShort()}
        />
      </Popover>
    );
  }
}

export default CalendarExample;
