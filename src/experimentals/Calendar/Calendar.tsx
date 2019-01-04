import React, {Fragment, MouseEvent, ReactElement, useCallback} from 'react'

import cx from 'classnames'

import {Button} from '@elements/index'
import {attr} from '@utils/attr'

import {CalendarProps} from './interfaces'
import {generateCalendarData} from './util'

import CalendarBody from './CalendarBody'
import CalendarContainer from './CalendarContainer'
import CalendarDate from './CalendarDate'
import CalendarHeader from './CalendarHeader'
import CalendarNav from './CalendarNav'
import DateItem from './DateItem'

const Calendar = ({
  children,
  lg,
  nav,
  weekdays,
  current,
  options,
  onDateClick,
  formatDate,
}: CalendarProps): ReactElement<CalendarProps> => (
  <div className={cx('calendar', {'calendar-lg': lg})}>
    {children ? (
      children
    ) : (
      <Fragment>
        {nav && (
          <CalendarNav>
            <Button
              size="lg"
              color="link"
              actionButton
              onClick={nav.prev.onClick}
            >
              {nav.prev.children}
            </Button>
            <Button size="lg" color="link" onClick={nav.current.onClick}>
              {nav.current.children}
            </Button>
            <Button
              size="lg"
              color="link"
              actionButton
              onClick={nav.next.onClick}
            >
              {nav.next.children}
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
                const handleDateClick = useCallback(
                  (e: MouseEvent<any>) => onDateClick && onDateClick(e, date),
                  [date]
                )
                return (
                  <CalendarDate
                    key={date.toDateString()}
                    {...attr({
                      className: cx('calendar-date', {
                        'prev-month': before,
                        'current-month': same,
                        'next-month': after,
                        'calendar-range': foundBetween,
                        'range-start': rangeStart,
                        'range-end': rangeEnd,
                        tooltip: foundSameDay,
                        disabled: before || after,
                      }),
                      tooltip: foundSameDay && foundSameDay.tooltip,
                    })}
                  >
                    <DateItem
                      disabled={
                        foundSameDay && foundSameDay.type === 'disabled'
                      }
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
    )}
  </div>
)

export default Calendar
