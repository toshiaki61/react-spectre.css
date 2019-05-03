import * as React from 'react'

import {addMonths, eachDay, endOfWeek, format, startOfWeek} from 'date-fns'

import {Popover, Calendar, DateLike} from '../src'

interface ICalendarExampleState {
  active: boolean
  current: Date | string | number
}
class CalendarExample extends React.Component<any, ICalendarExampleState> {
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
    const dateClick = (e: React.MouseEvent<any>, date: DateLike) =>
      console.log(date)
    const prevClick = () => {
      this.setState(s => ({current: addMonths(s.current, -1)}))
    }
    const nextClick = () => {
      this.setState(s => ({current: addMonths(s.current, 1)}))
    }
    return (
      <Popover target={<div>PopOver</div>} position="bottom">
        <Calendar
          current={current}
          // onMonthClick={this.onMonthClick}
          nav={{
            current: format(current, 'MMMM YYYY'),
            prev: {onClick: prevClick},
            next: {onClick: nextClick},
          }}
          onDateClick={dateClick}
          weekdays={this.weekdays}
        />
      </Popover>
    )
  }

  // private onMonthClick = (e: React.MouseEvent<any>, m: string | number | Date) =>
  //   this.setState({current: m})

  // private onClick = () => this.setState({active: !this.state.active})
}
export default CalendarExample
