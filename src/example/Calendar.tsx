import React, {Component, MouseEvent} from 'react'

import {eachDay, endOfWeek, format, startOfWeek} from 'date-fns'

import {Popover} from '@components/Popover'
import {Calendar} from '@experimentals/Calendar'

interface ICalendarExampleState {
  active: boolean
  current: Date | string | number
}
class CalendarExample extends Component<any, ICalendarExampleState> {
  private weekdays: string[]

  constructor(props: any) {
    super(props)
    this.state = {
      active: false,
      current: new Date(),
    }
    this.weekdays = eachDay(
      startOfWeek(this.state.current),
      endOfWeek(this.state.current)
    ).reduce((acc: string[], d) => {
      acc.push(format(d, 'dd'))
      return acc
    }, [])
  }

  public render() {
    const {current} = this.state
    return (
      <Popover target={<div>PopOver</div>} bottom>
        <Calendar
          current={current}
          // onMonthClick={this.onMonthClick}
          // nav={{current: {on}}}
          onDateClick={this.onClick}
          weekdays={this.weekdays}
        />
      </Popover>
    )
  }

  private onMonthClick = (e: MouseEvent<any>, m: string | number | Date) =>
    this.setState({current: m})

  private onClick = () => this.setState({active: !this.state.active})
}
export default CalendarExample
