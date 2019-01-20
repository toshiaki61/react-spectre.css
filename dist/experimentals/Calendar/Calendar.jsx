import React, { Fragment } from 'react';
import cx from 'classnames';
import { Button, Icon } from '@elements/index';
import { attr } from '@utils/attr';
import { generateCalendarData, hasCalendarChildren } from './util';
import CalendarBody from './CalendarBody';
import CalendarContainer from './CalendarContainer';
import CalendarDate from './CalendarDate';
import CalendarHeader from './CalendarHeader';
import CalendarNav from './CalendarNav';
import DateItem from './DateItem';
function renderCalendar(p) {
    if (hasCalendarChildren(p)) {
        return p.children;
    }
    var nav = p.nav, weekdays = p.weekdays, current = p.current, options = p.options, onDateClick = p.onDateClick, formatDate = p.formatDate;
    return (<Fragment>
      {nav && (<CalendarNav>
          <Button size="lg" color="link" actionButton onClick={nav.prev.onClick}>
            {nav.prev.children || <Icon type="arrow-left"/>}
          </Button>
          <div className="navbar-primary">{nav.current}</div>
          <Button size="lg" color="link" actionButton onClick={nav.next.onClick}>
            {nav.next.children || <Icon type="arrow-right"/>}
          </Button>
        </CalendarNav>)}
      <CalendarContainer>
        {weekdays && (<CalendarHeader>
            {weekdays.map(function (d) { return (<CalendarDate key={d}>{d}</CalendarDate>); })}
          </CalendarHeader>)}
        <CalendarBody>
          {generateCalendarData(current, options).map(function (_a) {
        var date = _a.date, same = _a.same, before = _a.before, after = _a.after, foundSameDay = _a.foundSameDay, foundBetween = _a.foundBetween, rangeStart = _a.rangeStart, rangeEnd = _a.rangeEnd;
        var handleDateClick = 
        //  useCallback(
        function (e) { return onDateClick && onDateClick(e, date); };
        // ,[date])
        return (<CalendarDate key={date.toDateString()} {...attr({
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
        })}>
                  <DateItem disabled={foundSameDay && foundSameDay.type === 'disabled'} active={rangeStart || rangeEnd} badge={foundSameDay && foundSameDay.type === 'badge'} today={foundSameDay && foundSameDay.type === 'today'} onClick={handleDateClick}>
                    {formatDate && formatDate(date)}
                  </DateItem>
                </CalendarDate>);
    })}
        </CalendarBody>
      </CalendarContainer>
    </Fragment>);
}
var Calendar = function (p) { return (<div className={cx('calendar', { 'calendar-lg': p.lg })}>
    {renderCalendar(p)}
  </div>); };
export default Calendar;
//# sourceMappingURL=Calendar.jsx.map