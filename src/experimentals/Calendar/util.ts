import {
  addDays,
  differenceInCalendarDays,
  endOfMonth,
  endOfWeek,
  isAfter,
  isBefore,
  isEqual,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns'

import {compose, range} from 'ramda'
import {CalendarChildrenProps, CalendarOptions, DateLike} from './interfaces'

export function isBeforeMonth(date: DateLike, target: DateLike) {
  return isBefore(date, target) && !isSameMonth(date, target)
}

export function isAfterMonth(date: DateLike, target: DateLike) {
  return isAfter(date, target) && !isSameMonth(date, target)
}

export function isBetween(
  date: DateLike,
  from: DateLike,
  to: DateLike,
  inclusivity = '()'
) {
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

export const startOfCalendarWeek = compose(
  startOfWeek,
  startOfMonth
)

export const endOfCalendarWeek = compose(
  endOfWeek,
  endOfMonth
)

export function generateCalendarData(
  current: DateLike,
  options?: CalendarOptions
) {
  const start = startOfCalendarWeek(current)
  const end = endOfCalendarWeek(current)
  const o = options || {
    data: [],
    range: [],
  }
  return range(0, differenceInCalendarDays(end, start) + 1).map(d => {
    const date = addDays(start, d)
    const same = isSameMonth(date, current)
    const before = isBeforeMonth(date, current)
    const after = isAfterMonth(date, current)
    const foundSameDay = o.data.find(datum => isSameDay(date, datum.date))
    console.log(options && options.data)
    const foundBetween = o.range.find(r =>
      isBetween(date, r.start, r.end, '[]')
    )
    const rangeStart = foundBetween && isSameDay(date, foundBetween.start)
    const rangeEnd = foundBetween && isSameDay(date, foundBetween.end)
    return {
      date,
      same,
      before,
      after,
      foundSameDay,
      foundBetween,
      rangeStart,
      rangeEnd,
    }
  })
}

export function hasCalendarChildren(item: any): item is CalendarChildrenProps {
  return item.children
}
