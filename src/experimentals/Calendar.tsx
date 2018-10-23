import React, {ReactElement} from 'react'
import classnames from 'classnames'
import noop from 'lodash.noop'
import {compose, range} from 'ramda'
import {
  addDays,
  addMonths,
  differenceInCalendarDays,
  endOfWeek,
  endOfMonth,
  format,
  isAfter,
  isBefore,
  isEqual,
  isSameDay,
  isSameMonth,
  subMonths,
  startOfWeek,
  startOfMonth,
} from 'date-fns'
import Button from '../elements/Button'
import Icon from '../elements/Icon'

export interface NavProps {
  current: Date | string | number
  navFormat?: string
  onMonthClick?: (e: Event, m: Date | string | number) => void
}
const Nav = ({
  current,
  navFormat,
  onMonthClick = noop,
}: NavProps): ReactElement<NavProps> => (
  <div className="calendar-nav navbar">
    <Button
      action
      link
      lg
      onClick={e => onMonthClick(e, subMonths(current, 1))}
    >
      <Icon arrowLeft />
    </Button>
    <Button link lg onClick={e => onMonthClick(e, current)}>
      {format(current, navFormat)}
    </Button>
    <Button
      action
      link
      lg
      onClick={e => onMonthClick(e, addMonths(current, 1))}
    >
      <Icon arrowRight />
    </Button>
  </div>
)
Nav.defaultProps = {
  onMonthClick: noop,
  navFormat: 'YYYY-MM-DD',
}
export interface HeaderProps {
  weekdays: Array<string>
}
const Header = ({weekdays}: HeaderProps): ReactElement<HeaderProps> => (
  <div className="calendar-header">
    {weekdays.map((d, i) => {
      const key = `weekday-${i}`
      return (
        <div key={key} className="calendar-date">
          {d}
        </div>
      )
    })}
  </div>
)
Header.defaultProps = {}
export interface BodyProps {
  current: Date | string | number
  start?: Date | string | number
  end?: Date | string | number
  options?: {
    data: Array<{
      date: string
      tooltip: string
      type?: 'badge' | 'disabled' | 'today'
    }>
    range: Array<{
      start: string
      end: string
    }>
  }
  dateFormat?: string
  onDateClick: (e: Event, d: Date) => void
}
const isBeforeMonth = (date, target) =>
  isBefore(date, target) && !isSameMonth(date, target)
const isAfterMonth = (date, target) =>
  isAfter(date, target) && !isSameMonth(date, target)
const isBetween = (date, from, to, inclusivity = '()') => {
  if (!['()', '[]', '(]', '[)'].includes(inclusivity)) {
    throw new Error('Inclusivity parameter must be one of (), [], (], [)')
  }
  const isBeforeEqual = inclusivity[0] === '['

  const isAfterEqual = inclusivity[1] === ']'
  return (
    (isBeforeEqual
      ? isEqual(from, date) || isBefore(from, date)
      : isBefore(from, date)) &&
    (isAfterEqual ? isEqual(to, date) || isAfter(to, date) : isAfter(to, date))
  )
}
const Body = ({
  current,
  start,
  end,
  options,
  dateFormat,
  onDateClick,
}: BodyProps): ReactElement<BodyProps> => {
  const dates = range(0, differenceInCalendarDays(end, start) + 1).map(d => {
    const date = addDays(start, d)
    const before = isBeforeMonth(date, current)
    const after = isAfterMonth(date, current)
    const datum =
      options &&
      options.data &&
      options.data.find(datum => isSameDay(date, datum.date))
    const range =
      options &&
      options.range &&
      options.range.find(r => isBetween(date, r.start, r.end, '[]'))
    const rangeStart = range && isSameDay(date, range.start)
    const rangeEnd = range && isSameDay(date, range.end)
    const classes = classnames('calendar-date', {
      'prev-month': before,
      'current-month': isSameMonth(date, current),
      'next-month': after,
      'calendar-range': range,
      'range-start': rangeStart,
      'range-end': rangeEnd,
      tooltip: datum,
      disabled: before || after,
    })
    const btnClasses = classnames('date-item', {
      active: rangeStart || rangeEnd,
      badge: datum && datum.type === 'badge',
      'date-today': datum && datum.type === 'today',
    })
    return (
      <div key={d} className={classes} data-tooltip={datum && datum.tooltip}>
        <Button
          disabled={datum && datum.type === 'disabled'}
          className={btnClasses}
          onClick={e => onDateClick(e, date)}
        >
          {format(date, dateFormat)}
        </Button>
      </div>
    )
  })
  return <div className="calendar-body">{dates}</div>
}
Body.defaultProps = {
  options: {
    data: [],
    range: [],
  },
  dateFormat: 'D',
}
const startOfCalendarWeek = compose(
  startOfWeek,
  startOfMonth
)
const endOfCalendarWeek = compose(
  endOfWeek,
  endOfMonth
)
interface CalendarProps extends NavProps, HeaderProps, BodyProps {
  lg?: boolean
}
const Calendar = ({
  navFormat,
  start,
  end,
  options,
  onMonthClick,
  onDateClick,
  current,
  weekdays,
  lg,
  ...props
}: CalendarProps): ReactElement<CalendarProps> | null => {
  if (!current) {
    return null
  }
  return (
    <div className={classnames('calendar', {'calendar-lg': lg})}>
      <Nav
        current={current}
        navFormat={navFormat}
        onMonthClick={onMonthClick}
      />
      <div className="calendar-container">
        <Header weekdays={weekdays} />
        <Body
          {...props}
          current={current}
          start={start || startOfCalendarWeek(current)}
          end={end || endOfCalendarWeek(current)}
          options={options}
          onDateClick={onDateClick}
        />
      </div>
    </div>
  )
}
Calendar.defaultProps = {
  ...Nav.defaultProps,
  ...Header.defaultProps,
  ...Body.defaultProps,
}
export default Calendar
