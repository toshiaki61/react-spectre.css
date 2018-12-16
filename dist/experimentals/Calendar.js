import * as tslib_1 from "tslib";
import classnames from 'classnames';
import { addDays, addMonths, differenceInCalendarDays, endOfMonth, endOfWeek, format, isAfter, isBefore, isEqual, isSameDay, isSameMonth, startOfMonth, startOfWeek, subMonths, } from 'date-fns';
import { compose, range } from 'ramda';
import React from 'react';
import Button from '../elements/Button';
import Icon from '../elements/Icon';
import noop from '../utilities/noop';
var Nav = function (_a) {
    var current = _a.current, navFormat = _a.navFormat, _b = _a.onMonthClick, onMonthClick = _b === void 0 ? noop : _b;
    var handlePrevMonthClick = function (e) {
        return onMonthClick(e, subMonths(current, 1));
    };
    var handleCurrentMonthClick = function (e) {
        return onMonthClick(e, current);
    };
    var handleNextMonthClick = function (e) {
        return onMonthClick(e, addMonths(current, 1));
    };
    return (React.createElement("div", { className: "calendar-nav navbar" },
        React.createElement(Button, { action: true, link: true, lg: true, onClick: handlePrevMonthClick },
            React.createElement(Icon, { arrowLeft: true })),
        React.createElement(Button, { link: true, lg: true, onClick: handleCurrentMonthClick }, format(current, navFormat)),
        React.createElement(Button, { action: true, link: true, lg: true, onClick: handleNextMonthClick },
            React.createElement(Icon, { arrowRight: true }))));
};
Nav.defaultProps = {
    onMonthClick: noop,
    navFormat: 'YYYY-MM-DD',
};
var Header = function (_a) {
    var weekdays = _a.weekdays;
    return (React.createElement("div", { className: "calendar-header" }, weekdays.map(function (d, i) {
        var key = "weekday-" + i;
        return (React.createElement("div", { key: key, className: "calendar-date" }, d));
    })));
};
Header.defaultProps = {};
var isBeforeMonth = function (date, target) { return isBefore(date, target) && !isSameMonth(date, target); };
var isAfterMonth = function (date, target) { return isAfter(date, target) && !isSameMonth(date, target); };
var isBetween = function (date, from, to, inclusivity) {
    if (inclusivity === void 0) { inclusivity = '()'; }
    if (!['()', '[]', '(]', '[)'].includes(inclusivity)) {
        throw new Error('Inclusivity parameter must be one of (), [], (], [)');
    }
    var isBeforeEqual = inclusivity[0] === '[';
    var isAfterEqual = inclusivity[1] === ']';
    return ((isBeforeEqual
        ? isEqual(from, date) || isBefore(from, date)
        : isBefore(from, date)) &&
        (isAfterEqual ? isEqual(to, date) || isAfter(to, date) : isAfter(to, date)));
};
var Body = function (_a) {
    var current = _a.current, start = _a.start, end = _a.end, options = _a.options, dateFormat = _a.dateFormat, onDateClick = _a.onDateClick;
    var dates = range(0, differenceInCalendarDays(end, start) + 1).map(function (d) {
        var date = addDays(start, d);
        var before = isBeforeMonth(date, current);
        var after = isAfterMonth(date, current);
        var foundSameDay = options &&
            options.data &&
            options.data.find(function (datum) { return isSameDay(date, datum.date); });
        var foundBetween = options &&
            options.range &&
            options.range.find(function (r) { return isBetween(date, r.start, r.end, '[]'); });
        var rangeStart = foundBetween && isSameDay(date, foundBetween.start);
        var rangeEnd = foundBetween && isSameDay(date, foundBetween.end);
        var classes = classnames('calendar-date', {
            'prev-month': before,
            'current-month': isSameMonth(date, current),
            'next-month': after,
            'calendar-range': foundBetween,
            'range-start': rangeStart,
            'range-end': rangeEnd,
            tooltip: foundSameDay,
            disabled: before || after,
        });
        var btnClasses = classnames('date-item', {
            active: rangeStart || rangeEnd,
            badge: foundSameDay && foundSameDay.type === 'badge',
            'date-today': foundSameDay && foundSameDay.type === 'today',
        });
        var handleDateClick = function (e) { return onDateClick(e, date); };
        return (React.createElement("div", { key: d, className: classes, "data-tooltip": foundSameDay && foundSameDay.tooltip },
            React.createElement(Button, { disabled: foundSameDay && foundSameDay.type === 'disabled', className: btnClasses, onClick: handleDateClick }, format(date, dateFormat))));
    });
    return React.createElement("div", { className: "calendar-body" }, dates);
};
Body.defaultProps = {
    options: {
        data: [],
        range: [],
    },
    dateFormat: 'D',
};
var startOfCalendarWeek = compose(startOfWeek, startOfMonth);
var endOfCalendarWeek = compose(endOfWeek, endOfMonth);
var Calendar = function (_a) {
    var navFormat = _a.navFormat, start = _a.start, end = _a.end, options = _a.options, onMonthClick = _a.onMonthClick, onDateClick = _a.onDateClick, current = _a.current, weekdays = _a.weekdays, lg = _a.lg, props = tslib_1.__rest(_a, ["navFormat", "start", "end", "options", "onMonthClick", "onDateClick", "current", "weekdays", "lg"]);
    if (!current) {
        return null;
    }
    return (React.createElement("div", { className: classnames('calendar', { 'calendar-lg': lg }) },
        React.createElement(Nav, { current: current, navFormat: navFormat, onMonthClick: onMonthClick }),
        React.createElement("div", { className: "calendar-container" },
            React.createElement(Header, { weekdays: weekdays }),
            React.createElement(Body, tslib_1.__assign({}, props, { current: current, start: start || startOfCalendarWeek(current), end: end || endOfCalendarWeek(current), options: options, onDateClick: onDateClick })))));
};
Calendar.defaultProps = tslib_1.__assign({}, Nav.defaultProps, Header.defaultProps, Body.defaultProps);
export default Calendar;
//# sourceMappingURL=Calendar.js.map