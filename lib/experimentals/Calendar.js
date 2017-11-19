var _babelPluginFlowReact;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';
import moment from 'moment';
import noop from 'lodash.noop';

import Button from '../elements/Button';
import Icon from '../elements/Icon';var babelPluginFlowReactPropTypes_proptype_NavProps = { current: typeof moment === 'function' ? require('prop-types').instanceOf(moment).isRequired : require('prop-types').any.isRequired, navFormat: require('prop-types').string.isRequired, onMonthClick: require('prop-types').func };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_NavProps', { value: babelPluginFlowReactPropTypes_proptype_NavProps, configurable: true, enumerable: true });






var Nav = function Nav(_ref) {var
  current = _ref.current,
  navFormat = _ref.navFormat,_ref$onMonthClick = _ref.
  onMonthClick,onMonthClick = _ref$onMonthClick === undefined ? noop : _ref$onMonthClick;return (

    React.createElement('div', { className: 'calendar-nav navbar' },
      React.createElement(Button, { action: true, link: true, lg: true, onClick: function onClick(e) {return onMonthClick(e, current.clone().add(-1, 'month'));} }, React.createElement(Icon, { arrowLeft: true })),
      React.createElement(Button, { link: true, lg: true, onClick: function onClick(e) {return onMonthClick(e, current.clone());} },
        current.format(navFormat)),

      React.createElement(Button, { action: true, link: true, lg: true, onClick: function onClick(e) {return onMonthClick(e, current.clone().add(1, 'month'));} }, React.createElement(Icon, { arrowRight: true }))));};Nav.propTypes = babelPluginFlowReactPropTypes_proptype_NavProps;


Nav.defaultProps = {
  onMonthClick: noop };var babelPluginFlowReactPropTypes_proptype_HeaderProps = { weekdays: require('prop-types').arrayOf(require('prop-types').string).isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_HeaderProps', { value: babelPluginFlowReactPropTypes_proptype_HeaderProps, configurable: true, enumerable: true });





var Header = function Header(_ref2) {var weekdays = _ref2.weekdays;return (
    React.createElement('div', { className: 'calendar-header' },
      weekdays.map(function (d, i) {
        var key = 'weekday-' + i;
        return (
          React.createElement('div', { key: key, className: 'calendar-date' }, d));

      })));};Header.propTypes = babelPluginFlowReactPropTypes_proptype_HeaderProps;


Header.defaultProps = {};var babelPluginFlowReactPropTypes_proptype_BodyProps = { current: typeof moment === 'function' ? require('prop-types').instanceOf(moment).isRequired : require('prop-types').any.isRequired, start: typeof moment === 'function' ? require('prop-types').instanceOf(moment).isRequired : require('prop-types').any.isRequired, end: typeof moment === 'function' ? require('prop-types').instanceOf(moment).isRequired : require('prop-types').any.isRequired, options: require('prop-types').shape({ data: require('prop-types').arrayOf(require('prop-types').shape({ date: require('prop-types').string.isRequired, tooltip: require('prop-types').string.isRequired, type: require('prop-types').oneOf(['badge', 'disabled', 'today']) })).isRequired, range: require('prop-types').arrayOf(require('prop-types').shape({ start: require('prop-types').string.isRequired, end: require('prop-types').string.isRequired })).isRequired }), dateFormat: require('prop-types').string, onDateClick: require('prop-types').func.isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_BodyProps', { value: babelPluginFlowReactPropTypes_proptype_BodyProps, configurable: true, enumerable: true });



















var Body = function Body(_ref3)






{var current = _ref3.current,start = _ref3.start,end = _ref3.end,options = _ref3.options,dateFormat = _ref3.dateFormat,onDateClick = _ref3.onDateClick;
  var dates = [];var _loop = function _loop(
  _d) {
    var before = _d.isBefore(current, 'month');
    var after = _d.isAfter(current, 'month');
    var datum = options && options.data && options.data.find(function (_ref4) {var date = _ref4.date;return _d.isSame(date, 'date');});
    var range = options && options.range && options.range.
    find(function (r) {return _d.isBetween(r.start, r.end, 'date', '[]');});
    var rangeStart = range && _d.isSame(range.start, 'date');
    var rangeEnd = range && _d.isSame(range.end, 'date');
    var classes = classnames('calendar-date', {
      'prev-month': before,
      'current-month': _d.isSame(current, 'month'),
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

    var date = _d.clone();
    dates.push(
    React.createElement('div', { key: date.format(), className: classes, 'data-tooltip': datum && datum.tooltip },
      React.createElement(Button, {
          disabled: datum && datum.type === 'disabled',
          className: btnClasses,
          onClick: function onClick(e) {return onDateClick(e, date);} },

        date.format(dateFormat))));};for (var _d = start.clone(); _d.isSameOrBefore(end, 'date'); _d.add(1, 'day')) {_loop(_d);



  }
  // console.log(dates, current, options);
  return (
    React.createElement('div', { className: 'calendar-body' },
      dates));


};Body.propTypes = babelPluginFlowReactPropTypes_proptype_BodyProps;
Body.defaultProps = {
  options: {
    data: [],
    range: [] },

  dateFormat: 'D' };var babelPluginFlowReactPropTypes_proptype_CalendarProps = (_babelPluginFlowReact = { current: typeof moment === 'function' ? require('prop-types').instanceOf(moment).isRequired : require('prop-types').any.isRequired, navFormat: require('prop-types').string.isRequired, onMonthClick: require('prop-types').func, weekdays: require('prop-types').arrayOf(require('prop-types').string).isRequired }, _defineProperty(_babelPluginFlowReact, 'current', typeof moment === 'function' ? require('prop-types').instanceOf(moment).isRequired : require('prop-types').any.isRequired), _defineProperty(_babelPluginFlowReact, 'start', typeof moment === 'function' ? require('prop-types').instanceOf(moment).isRequired : require('prop-types').any.isRequired), _defineProperty(_babelPluginFlowReact, 'end', typeof moment === 'function' ? require('prop-types').instanceOf(moment).isRequired : require('prop-types').any.isRequired), _defineProperty(_babelPluginFlowReact, 'options', require('prop-types').shape({ data: require('prop-types').arrayOf(require('prop-types').shape({ date: require('prop-types').string.isRequired, tooltip: require('prop-types').string.isRequired, type: require('prop-types').oneOf(['badge', 'disabled', 'today']) })).isRequired, range: require('prop-types').arrayOf(require('prop-types').shape({ start: require('prop-types').string.isRequired, end: require('prop-types').string.isRequired })).isRequired })), _defineProperty(_babelPluginFlowReact, 'dateFormat', require('prop-types').string), _defineProperty(_babelPluginFlowReact, 'onDateClick', require('prop-types').func.isRequired), _babelPluginFlowReact);if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CalendarProps', { value: babelPluginFlowReactPropTypes_proptype_CalendarProps, configurable: true, enumerable: true });



var Calendar = function Calendar(_ref5)









{var navFormat = _ref5.navFormat,start = _ref5.start,end = _ref5.end,options = _ref5.options,onMonthClick = _ref5.onMonthClick,onDateClick = _ref5.onDateClick,current = _ref5.current,weekdays = _ref5.weekdays,props = _objectWithoutProperties(_ref5, ['navFormat', 'start', 'end', 'options', 'onMonthClick', 'onDateClick', 'current', 'weekdays']);
  if (!current) {
    return null;
  }
  return (
    React.createElement('div', { className: 'calendar' },
      React.createElement(Nav, {
        current: current,
        navFormat: navFormat,
        onMonthClick: onMonthClick }),

      React.createElement('div', { className: 'calendar-container' },
        React.createElement(Header, { weekdays: weekdays }),
        React.createElement(Body, _extends({},
        props, {
          current: current,
          start: start || current.clone().startOf('month').startOf('week'),
          end: end || current.clone().endOf('month').endOf('week'),
          options: options,
          onDateClick: onDateClick })))));




};Calendar.propTypes = babelPluginFlowReactPropTypes_proptype_CalendarProps;
Calendar.defaultProps = _extends({},
Nav.defaultProps,
Header.defaultProps,
Body.defaultProps);


export default Calendar;