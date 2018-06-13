import React, {Component} from 'react'

import {eachDay, endOfWeek, format, startOfWeek} from 'date-fns'

import Popover from '../components/Popover'
import Calendar from '../experimentals/Calendar'

class CalendarExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: new Date(),
    }
    this.weekdays = eachDay(
      startOfWeek(this.state.current),
      endOfWeek(this.state.current)
    ).reduce((a, d) => {
      a.push(format(d, 'dd'))
      return a
    }, [])
  }
  onMonthClick = (e, m) => this.setState({current: m})
  onClick = () => this.setState({active: !this.state.active})
  render() {
    const {current} = this.state
    return (
      <Popover target={<div>PopOver</div>} bottom>
        <Calendar
          current={current}
          onMonthClick={this.onMonthClick}
          onDateClick={this.onClick}
          weekdays={this.weekdays}
        />
      </Popover>
    )
  }
}

export default CalendarExample
