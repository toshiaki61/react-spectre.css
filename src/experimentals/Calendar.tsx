import classnames from 'classnames'
import {
  addDays,
  addMonths,
  differenceInCalendarDays,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isBefore,
  isEqual,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns'
import {compose, range} from 'ramda'
import React, {MouseEvent, ReactElement} from 'react'
import Button from '../elements/Button'
import Icon from '../elements/Icon'
import noop from '../utilities/noop'

export interface INavProps {
  current: Date | string | number
  navFormat?: string
  onMonthClick?: (e: MouseEvent<any>, m: Date | string | number) => void
}
const Nav = ({
  current,
  navFormat,
  onMonthClick = noop,
}: INavProps): ReactElement<INavProps> => {
  const handlePrevMonthClick = (e: MouseEvent<any>) =>
    onMonthClick(e, subMonths(current, 1))
  const handleCurrentMonthClick = (e: MouseEvent<any>) =>
    onMonthClick(e, current)
  const handleNextMonthClick = (e: MouseEvent<any>) =>
    onMonthClick(e, addMonths(current, 1))
  return (
    <div className="calendar-nav navbar">
      <Button action link lg onClick={handlePrevMonthClick}>
        <Icon arrowLeft />
      </Button>
      <Button link lg onClick={handleCurrentMonthClick}>
        {format(current, navFormat)}
      </Button>
      <Button action link lg onClick={handleNextMonthClick}>
        <Icon arrowRight />
      </Button>
    </div>
  )
}
Nav.defaultProps = {
  onMonthClick: noop,
  navFormat: 'YYYY-MM-DD',
}
export interface IHeaderProps {
  weekdays: string[]
}
const Header = ({weekdays}: IHeaderProps): ReactElement<IHeaderProps> => (
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
const isBeforeMonth = (
  date: Date | string | number,
  target: Date | string | number
) => isBefore(date, target) && !isSameMonth(date, target)
const isAfterMonth = (
  date: Date | string | number,
  target: Date | string | number
) => isAfter(date, target) && !isSameMonth(date, target)
const isBetween = (
  date: Date | string | number,
  from: Date | string | number,
  to: Date | string | number,
  inclusivity = '()'
) => {
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

export interface IBodyProps {
  current: Date | string | number
  start: Date | string | number
  end: Date | string | number
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
  onDateClick: (e: MouseEvent<any>, d: Date) => void
}
const Body = ({
  current,
  start,
  end,
  options,
  dateFormat,
  onDateClick,
}: IBodyProps): ReactElement<IBodyProps> => {
  const dates = range(0, differenceInCalendarDays(end, start) + 1).map(d => {
    const date = addDays(start, d)
    const before = isBeforeMonth(date, current)
    const after = isAfterMonth(date, current)
    const foundSameDay =
      options &&
      options.data &&
      options.data.find(datum => isSameDay(date, datum.date))
    const foundBetween =
      options &&
      options.range &&
      options.range.find(r => isBetween(date, r.start, r.end, '[]'))
    const rangeStart = foundBetween && isSameDay(date, foundBetween.start)
    const rangeEnd = foundBetween && isSameDay(date, foundBetween.end)
    const classes = classnames('calendar-date', {
      'prev-month': before,
      'current-month': isSameMonth(date, current),
      'next-month': after,
      'calendar-range': foundBetween,
      'range-start': rangeStart,
      'range-end': rangeEnd,
      tooltip: foundSameDay,
      disabled: before || after,
    })
    const btnClasses = classnames('date-item', {
      active: rangeStart || rangeEnd,
      badge: foundSameDay && foundSameDay.type === 'badge',
      'date-today': foundSameDay && foundSameDay.type === 'today',
    })
    const handleDateClick = (e: MouseEvent<any>) => onDateClick(e, date)
    return (
      <div
        key={d}
        className={classes}
        data-tooltip={foundSameDay && foundSameDay.tooltip}
      >
        <Button
          disabled={foundSameDay && foundSameDay.type === 'disabled'}
          className={btnClasses}
          onClick={handleDateClick}
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
interface ICalendarProps extends INavProps, IHeaderProps {
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
  onDateClick: (e: MouseEvent<any>, d: Date) => void
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
}: ICalendarProps): ReactElement<ICalendarProps> | null => {
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
