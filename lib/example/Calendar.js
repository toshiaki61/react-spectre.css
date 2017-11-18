var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}import React, { Component } from 'react';
import moment from 'moment';

import Popover from '../components/Popover';
import Calendar from '../experimentals/Calendar';var

CalendarExample = function (_Component) {_inherits(CalendarExample, _Component);function CalendarExample() {var _ref;var _temp, _this, _ret;_classCallCheck(this, CalendarExample);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CalendarExample.__proto__ || Object.getPrototypeOf(CalendarExample)).call.apply(_ref, [this].concat(args))), _this), _this.
    state = {
      current: moment() }, _this.

    onMonthClick = function (e, m) {return _this.setState({ current: m });}, _this.
    onClick = function () {return _this.setState({ active: !_this.state.active });}, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(CalendarExample, [{ key: 'render', value: function render()
    {var
      current = this.state.current;
      return (
        React.createElement(Popover, { target: React.createElement('div', null, 'PopOver'), bottom: true },
          React.createElement(Calendar, {
            current: current,
            onMonthClick: this.onMonthClick,
            onDateClick: this.onClick,
            weekdays: moment().localeData().weekdaysShort() })));



    } }]);return CalendarExample;}(Component);


export default CalendarExample;