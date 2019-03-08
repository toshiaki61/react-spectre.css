import * as tslib_1 from "tslib";
import React, { Fragment } from 'react';
import cx from 'classnames';
import { Button, Icon } from 'elements/index';
import { attr } from 'utilities/attr';
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
    return (React.createElement(Fragment, null,
        nav && (React.createElement(CalendarNav, null,
            React.createElement(Button, { size: "lg", color: "link", actionButton: true, onClick: nav.prev.onClick }, nav.prev.children || React.createElement(Icon, { type: "arrow-left" })),
            React.createElement("div", { className: "navbar-primary" }, nav.current),
            React.createElement(Button, { size: "lg", color: "link", actionButton: true, onClick: nav.next.onClick }, nav.next.children || React.createElement(Icon, { type: "arrow-right" })))),
        React.createElement(CalendarContainer, null,
            weekdays && (React.createElement(CalendarHeader, null, weekdays.map(function (d) { return (React.createElement(CalendarDate, { key: d }, d)); }))),
            React.createElement(CalendarBody, null, generateCalendarData(current, options).map(function (_a) {
                var date = _a.date, same = _a.same, before = _a.before, after = _a.after, foundSameDay = _a.foundSameDay, foundBetween = _a.foundBetween, rangeStart = _a.rangeStart, rangeEnd = _a.rangeEnd;
                var handleDateClick = 
                //  useCallback(
                function (e) { return onDateClick && onDateClick(e, date); };
                // ,[date])
                return (React.createElement(CalendarDate, tslib_1.__assign({ key: date.toDateString() }, attr({
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
                })),
                    React.createElement(DateItem, { disabled: foundSameDay && foundSameDay.type === 'disabled', active: rangeStart || rangeEnd, badge: foundSameDay && foundSameDay.type === 'badge', today: foundSameDay && foundSameDay.type === 'today', onClick: handleDateClick }, formatDate && formatDate(date))));
            })))));
}
var Calendar = function (p) { return (React.createElement("div", { className: cx('calendar', { 'calendar-lg': p.lg }) }, renderCalendar(p))); };
export default Calendar;
//# sourceMappingURL=Calendar.js.map