import React, {FC, Fragment, MouseEvent, useCallback} from 'react'

import cx from 'classnames'

import {Button, Icon} from '@elements/index'
import {attr} from '@utils/attr'

import {CalendarProps} from './interfaces'
import {generateCalendarData, hasCalendarChildren} from './util'

import CalendarBody from './CalendarBody'
import CalendarContainer from './CalendarContainer'
import CalendarDate from './CalendarDate'
import CalendarHeader from './CalendarHeader'
import CalendarNav from './CalendarNav'
import DateItem from './DateItem'

function renderCalendar(p: CalendarProps) {
  if (hasCalendarChildren(p)) {
    return p.children
  }
  const {nav, weekdays, current, options, onDateClick, formatDate} = p
  return (
    <Fragment>
      {nav && (
        <CalendarNav>
          <Button
            size="lg"
            color="link"
            actionButton
            onClick={nav.prev.onClick}
          >
            {nav.prev.children || <Icon type="arrow-left" />}
          </Button>
          <div className="navbar-primary">{nav.current}</div>
          <Button
            size="lg"
            color="link"
            actionButton
            onClick={nav.next.onClick}
          >
            {nav.next.children || <Icon type="arrow-right" />}
          </Button>
        </CalendarNav>
      )}
      <CalendarContainer>
        {weekdays && (
          <CalendarHeader>
            {weekdays.map(d => (
              <CalendarDate key={d}>{d}</CalendarDate>
            ))}
          </CalendarHeader>
        )}
        <CalendarBody>
          {generateCalendarData(current, options).map(
            ({
              date,
              same,
              before,
              after,
              foundSameDay,
              foundBetween,
              rangeStart,
              rangeEnd,
            }) => {
              const handleDateClick =
                //  useCallback(
                (e: MouseEvent<any>) => onDateClick && onDateClick(e, date)
              // ,[date])
              return (
                <CalendarDate
                  key={date.toDateString()}
                  {...attr({
                    className: cx({
                      'prev-month': before,
                      'current-month': same,
                      'next-month': after,
                      'calendar-range': foundBetween,
                      'range-start': rangeStart,
                      'range-end': rangeEnd,
                      disabled: before || after,
                    }),
                    tooltip: foundSameDay && foundSameDay.tooltip,
                  })}
                >
                  <DateItem
                    disabled={foundSameDay && foundSameDay.type === 'disabled'}
                    active={rangeStart || rangeEnd}
                    badge={foundSameDay && foundSameDay.type === 'badge'}
                    today={foundSameDay && foundSameDay.type === 'today'}
                    onClick={handleDateClick}
                  >
                    {formatDate && formatDate(date)}
                  </DateItem>
                </CalendarDate>
              )
            }
          )}
        </CalendarBody>
      </CalendarContainer>
    </Fragment>
  )
}
const Calendar: FC<CalendarProps> = p => (
  <div className={cx('calendar', {'calendar-lg': p.lg})}>
    {renderCalendar(p)}
  </div>
)

export default Calendar
