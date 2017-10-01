/* @flow */
import React from 'react';
import classnames from 'classnames';
import moment from 'moment';
import noop from 'noop';

import Button from '../elements/Button';
import Icon from '../elements/Icon';

export type NavProps = {
  current: moment,
  navFormat: string,
  onMonthClick?: (e: Event, m: moment) => void,
};
const Nav = ({
  current,
  navFormat,
  onMonthClick = noop,
}: NavProps) => (
  <div className="calendar-nav navbar">
    <Button action link lg onClick={e => onMonthClick(e, current.clone().add(-1, 'month'))}><Icon arrowLeft /></Button>
    <Button link lg onClick={e => onMonthClick(e, current.clone())}>{current.format(navFormat)}</Button>
    <Button action link lg onClick={e => onMonthClick(e, current.clone().add(1, 'month'))}><Icon arrowRight /></Button>
  </div>
);
Nav.defaultProps = {
  current: moment(),
  navFormat: 'MMMM YYYY',
  onMonthClick: noop,
};

export type HeaderProps = {
  weekdays: Array<string>,
};
const Header = ({ weekdays }: HeaderProps) => (
  <div className="calendar-header">
    {weekdays.map((d, i) => {
      const key = `weekday-${i}`;
      return (
        <div key={key} className="calendar-date">{d}</div>
      );
    })}
  </div>
);
Header.defaultProps = {};

export type BodyProps = {
  current: moment,
  start: moment,
  end: moment,
  options: {
    data: Array<{
      date: string,
      tooltip: string,
      type: 'badge' | 'disabled' | 'today',
    }>,
    range: Array<{
      start: string,
      end: string,
    }>,
  },
  dateFormat: string,
  onDateClick: (e: Event, d: moment) => void,
};
const Body = ({ current, start, end, options, dateFormat, onDateClick }: BodyProps) => {
  const dates = [];
  for (const d = start.clone(); d.isSameOrBefore(end, 'date'); d.add(1, 'day')) {
    const before = d.isBefore(current, 'month');
    const after = d.isAfter(current, 'month');
    const datum = options.data && options.data.find(({ date }) => d.isSame(date, 'date'));
    const range = options.range && options.range
      .find(r => d.isBetween(r.start, r.end, 'date', '[]'));
    const rangeStart = range && d.isSame(range.start, 'date');
    const rangeEnd = range && d.isSame(range.end, 'date');
    const classes = classnames('calendar-date', {
      'prev-month': before,
      'current-month': d.isSame(current, 'month'),
      'next-month': after,
      'calendar-range': range,
      'range-start': rangeStart,
      'range-end': rangeEnd,
      tooltip: datum,
      disabled: before || after,
    });
    const btnClasses = classnames('date-item', {
      active: rangeStart || rangeEnd,
      badge: datum && datum.type === 'badge',
      'date-today': datum && datum.type === 'today',
    });
    const date = d.clone();
    dates.push((
      <div key={date.format()} className={classes} data-tooltip={datum && datum.tooltip}>
        <Button
          disabled={datum && datum.type === 'disabled'}
          className={btnClasses}
          onClick={e => onDateClick(e, date)}
        >{date.format(dateFormat)}</Button>
      </div>
    ));
  }
  // console.log(dates, current, options);
  return (
    <div className="calendar-body">
      {dates}
    </div>
  );
};
Body.defaultProps = {
  current: undefined,
  start: undefined,
  end: undefined,
  options: {},
  dateFormat: 'D',
  onDateClick: noop,
};

export type CalendarProps = NavProps & HeaderProps & BodyProps & {
};
const Calendar = ({
  navFormat,
  start,
  end,
  options,
  onMonthClick,
  onDateClick,
  current,
  weekdays,
  ...props
}: CalendarProps) => {
  if (!current) {
    return null;
  }
  return (
    <div className="calendar">
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
          start={start || current.clone().startOf('month').startOf('week')}
          end={end || current.clone().endOf('month').endOf('week')}
          options={options}
          onDateClick={onDateClick}
        />
      </div>
    </div>
  );
};
Calendar.defaultProps = {
  ...Nav.defaultProps,
  ...Header.defaultProps,
  ...Body.defaultProps,
};

export default Calendar;
