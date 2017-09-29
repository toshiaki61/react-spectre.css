/* @flow */
import React from 'react';
import classnames from 'classnames';
import moment from 'moment';

import Button from '../Button';
import Icon from '../Icon';
import noop from 'noop';

export type NavProps = {
  current: moment$Moment,
  navFormat: string,
  onPrevMonthClick: (e: Event) => void,
  onNextMonthClick: (e: Event) => void,
  onCurrentMonthClick: (e: Event) => void,
};
const Nav = ({
  current,
  navFormat,
  onPrevMonthClick,
  onNextMonthClick,
  onCurrentMonthClick,
}: NavProps) => (
  <div className="calendar-nav navbar">
    <Button action link lg onClick={onPrevMonthClick}><Icon arrowLeft /></Button>
    <Button link lg onClick={onCurrentMonthClick}>{current.format(navFormat)}</Button>
    <Button action link lg onClick={onNextMonthClick}><Icon arrowRight /></Button>
  </div>
);
Nav.defaultProps = {
  current: moment(),
  navFormat: 'MMMM YYYY',
  onPrevMonthClick: noop,
  onNextMonthClick: noop,
  onCurrentMonthClick: noop,
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
    dates.push((
      <div key={d.format()} className={classes} data-tooltip={datum && datum.tooltip}>
        <Button
          disabled={datum && datum.type === 'disabled'}
          className={btnClasses}
          onClick={e => onDateClick(e, d)}
        >{d.format(dateFormat)}</Button>
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
  onPrevMonthClick,
  onNextMonthClick,
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
        onPrevMonthClick={onPrevMonthClick}
        onNextMonthClick={onNextMonthClick}
      />
      <div className="calendar-container">
        <Header weekdays={weekdays} />
        <Body
          {...props}
          current={current}
          start={start || current.clone().startOf('month').startOf('week')}
          end={end || current.clone().endOf('month').endOf('week')}
          options={options}
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
