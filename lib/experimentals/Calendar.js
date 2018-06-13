var _bpfrpt_proptype_Cale;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';
import noop from 'lodash.noop';

import { compose, range } from 'ramda';
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
startOfMonth } from
'date-fns';

import Button from '../elements/Button';
import Icon from '../elements/Icon';var bpfrpt_proptype_NavProps = { current: PropTypes.oneOfType([function () {return (typeof Date === 'function' ? PropTypes.instanceOf(Date) : PropTypes.any).apply(this, arguments);}, PropTypes.string, PropTypes.number]).isRequired, navFormat: PropTypes.string, onMonthClick: PropTypes.func };






var Nav = function Nav(_ref) {var
  current = _ref.current,
  navFormat = _ref.navFormat,_ref$onMonthClick = _ref.
  onMonthClick,onMonthClick = _ref$onMonthClick === undefined ? noop : _ref$onMonthClick;return (

    React.createElement('div', { className: 'calendar-nav navbar' },
      React.createElement(Button, {
          action: true,
          link: true,
          lg: true,
          onClick: function onClick(e) {return onMonthClick(e, subMonths(current, 1));} },

        React.createElement(Icon, { arrowLeft: true })),

      React.createElement(Button, { link: true, lg: true, onClick: function onClick(e) {return onMonthClick(e, current);} },
        format(current, navFormat)),

      React.createElement(Button, {
          action: true,
          link: true,
          lg: true,
          onClick: function onClick(e) {return onMonthClick(e, addMonths(current, 1));} },

        React.createElement(Icon, { arrowRight: true }))));};Nav.propTypes = bpfrpt_proptype_NavProps;



Nav.defaultProps = {
  onMonthClick: noop,
  navFormat: 'YYYY-MM-DD' };var bpfrpt_proptype_HeaderProps = { weekdays: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired };





var Header = function Header(_ref2) {var weekdays = _ref2.weekdays;return (
    React.createElement('div', { className: 'calendar-header' },
      weekdays.map(function (d, i) {
        var key = 'weekday-' + i;
        return (
          React.createElement('div', { key: key, className: 'calendar-date' },
            d));


      })));};Header.propTypes = bpfrpt_proptype_HeaderProps;


Header.defaultProps = {};var bpfrpt_proptype_BodyProps = { current: PropTypes.oneOfType([function () {return (typeof Date === 'function' ? PropTypes.instanceOf(Date) : PropTypes.any).apply(this, arguments);}, PropTypes.string, PropTypes.number]).isRequired, start: PropTypes.oneOfType([function () {return (typeof Date === 'function' ? PropTypes.instanceOf(Date) : PropTypes.any).apply(this, arguments);}, PropTypes.string, PropTypes.number]), end: PropTypes.oneOfType([function () {return (typeof Date === 'function' ? PropTypes.instanceOf(Date) : PropTypes.any).apply(this, arguments);}, PropTypes.string, PropTypes.number]), options: PropTypes.shape({ data: PropTypes.arrayOf(PropTypes.shape({ date: PropTypes.string.isRequired, tooltip: PropTypes.string.isRequired, type: PropTypes.oneOf(['badge', 'disabled', 'today']) }).isRequired).isRequired, range: PropTypes.arrayOf(PropTypes.shape({ start: PropTypes.string.isRequired, end: PropTypes.string.isRequired }).isRequired).isRequired }), dateFormat: PropTypes.string, onDateClick: PropTypes.func.isRequired };




















var isBeforeMonth = function isBeforeMonth(date, target) {return (
    isBefore(date, target) && !isSameMonth(date, target));};

var isAfterMonth = function isAfterMonth(date, target) {return (
    isAfter(date, target) && !isSameMonth(date, target));};

var isBetween = function isBetween(date, from, to) {var inclusivity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '()';
  if (!['()', '[]', '(]', '[)'].includes(inclusivity)) {
    throw new Error('Inclusivity parameter must be one of (), [], (], [)');
  }

  var isBeforeEqual = inclusivity[0] === '[',
  isAfterEqual = inclusivity[1] === ']';

  return (
    (isBeforeEqual ?
    isEqual(from, date) || isBefore(from, date) :
    isBefore(from, date)) && (
    isAfterEqual ? isEqual(to, date) || isAfter(to, date) : isAfter(to, date)));

};
var Body = function Body(_ref3)






{var current = _ref3.current,start = _ref3.start,end = _ref3.end,options = _ref3.options,dateFormat = _ref3.dateFormat,onDateClick = _ref3.onDateClick;
  var dates = range(0, differenceInCalendarDays(end, start) + 1).map(function (d) {
    var date = addDays(start, d);
    var before = isBeforeMonth(date, current);
    var after = isAfterMonth(date, current);
    var datum =
    options &&
    options.data &&
    options.data.find(function (datum) {return isSameDay(date, datum.date);});
    var range =
    options &&
    options.range &&
    options.range.find(function (r) {return isBetween(date, r.start, r.end, '[]');});
    var rangeStart = range && isSameDay(date, range.start);
    var rangeEnd = range && isSameDay(date, range.end);
    var classes = classnames('calendar-date', {
      'prev-month': before,
      'current-month': isSameMonth(date, current),
      'next-month': after,
      'calendar-range': range,
      'range-start': rangeStart,
      'range-end': rangeEnd,
      tooltip: datum,
      disabled: before || after });

    var btnClasses = classnames('date-item', {
      active: rangeStart || rangeEnd,
      badge: datum && datum.type === 'badge',
      'date-today': datum && datum.type === 'today' });

    return (
      React.createElement('div', { key: d, className: classes, 'data-tooltip': datum && datum.tooltip },
        React.createElement(Button, {
            disabled: datum && datum.type === 'disabled',
            className: btnClasses,
            onClick: function onClick(e) {return onDateClick(e, date);} },

          format(date, dateFormat))));



  });
  return React.createElement('div', { className: 'calendar-body' }, dates);
};Body.propTypes = bpfrpt_proptype_BodyProps;
Body.defaultProps = {
  options: {
    data: [],
    range: [] },

  dateFormat: 'D' };

var startOfCalendarWeek = compose(
startOfWeek,
startOfMonth);

var endOfCalendarWeek = compose(
endOfWeek,
endOfMonth);var bpfrpt_proptype_CalendarProps = (_bpfrpt_proptype_Cale = { current: PropTypes.oneOfType([function () {return (typeof Date === 'function' ? PropTypes.instanceOf(Date) : PropTypes.any).apply(this, arguments);}, PropTypes.string, PropTypes.number]).isRequired, navFormat: PropTypes.string, onMonthClick: PropTypes.func, weekdays: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired }, _defineProperty(_bpfrpt_proptype_Cale, 'current', PropTypes.oneOfType([function () {return (typeof Date === 'function' ? PropTypes.instanceOf(Date) : PropTypes.any).apply(this, arguments);}, PropTypes.string, PropTypes.number]).isRequired), _defineProperty(_bpfrpt_proptype_Cale, 'start', PropTypes.oneOfType([function () {return (typeof Date === 'function' ? PropTypes.instanceOf(Date) : PropTypes.any).apply(this, arguments);}, PropTypes.string, PropTypes.number])), _defineProperty(_bpfrpt_proptype_Cale, 'end', PropTypes.oneOfType([function () {return (typeof Date === 'function' ? PropTypes.instanceOf(Date) : PropTypes.any).apply(this, arguments);}, PropTypes.string, PropTypes.number])), _defineProperty(_bpfrpt_proptype_Cale, 'options', PropTypes.shape({ data: PropTypes.arrayOf(PropTypes.shape({ date: PropTypes.string.isRequired, tooltip: PropTypes.string.isRequired, type: PropTypes.oneOf(['badge', 'disabled', 'today']) }).isRequired).isRequired, range: PropTypes.arrayOf(PropTypes.shape({ start: PropTypes.string.isRequired, end: PropTypes.string.isRequired }).isRequired).isRequired })), _defineProperty(_bpfrpt_proptype_Cale, 'dateFormat', PropTypes.string), _defineProperty(_bpfrpt_proptype_Cale, 'onDateClick', PropTypes.func.isRequired), _defineProperty(_bpfrpt_proptype_Cale, 'lg', PropTypes.bool), _bpfrpt_proptype_Cale);






var Calendar = function Calendar(_ref4)










{var navFormat = _ref4.navFormat,start = _ref4.start,end = _ref4.end,options = _ref4.options,onMonthClick = _ref4.onMonthClick,onDateClick = _ref4.onDateClick,current = _ref4.current,weekdays = _ref4.weekdays,lg = _ref4.lg,props = _objectWithoutProperties(_ref4, ['navFormat', 'start', 'end', 'options', 'onMonthClick', 'onDateClick', 'current', 'weekdays', 'lg']);
  if (!current) {
    return null;
  }

  return (
    React.createElement('div', { className: classnames('calendar', { 'calendar-lg': lg }) },
      React.createElement(Nav, {
        current: current,
        navFormat: navFormat,
        onMonthClick: onMonthClick }),

      React.createElement('div', { className: 'calendar-container' },
        React.createElement(Header, { weekdays: weekdays }),
        React.createElement(Body, _extends({},
        props, {
          current: current,
          start: start || startOfCalendarWeek(current),
          end: end || endOfCalendarWeek(current),
          options: options,
          onDateClick: onDateClick })))));




};Calendar.propTypes = bpfrpt_proptype_CalendarProps;
Calendar.defaultProps = _extends({},
Nav.defaultProps,
Header.defaultProps,
Body.defaultProps);


export default Calendar;import PropTypes from 'prop-types';export { bpfrpt_proptype_NavProps };export { bpfrpt_proptype_HeaderProps };export { bpfrpt_proptype_BodyProps };export { bpfrpt_proptype_CalendarProps };