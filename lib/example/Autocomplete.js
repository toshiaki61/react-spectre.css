var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}import React, { Component } from 'react';

import Autocomplete from '../components/Autocomplete';var

AutocompleteExample = function (_Component) {_inherits(AutocompleteExample, _Component);function AutocompleteExample() {var _ref;var _temp, _this, _ret;_classCallCheck(this, AutocompleteExample);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutocompleteExample.__proto__ || Object.getPrototypeOf(AutocompleteExample)).call.apply(_ref, [this].concat(args))), _this), _this.
    state = {
      active: false,
      loading: false,
      suggests: [
      { id: '1', name: 'Bruce Banner', img: '', initial: '' },
      { id: '2', name: 'Thor Odinson', img: '//picturepan2.github.io/spectre/img/avatar-1.png', initial: '' },
      { id: '3', name: 'Steve Rogers', img: '//picturepan2.github.io/spectre/img/avatar-4.png', initial: '' },
      { id: '4', name: 'Tony Stark', img: '', initial: 'TS' },
      { id: '5', name: 'Natasha Romanoff', img: '', initial: '' }],

      selected: [],

      input: '' }, _this.

    onClearClick = function (e, id) {
      e.preventDefault();var _this$state =
      _this.state,suggests = _this$state.suggests,selected = _this$state.selected;
      suggests.push(selected.find(function (row) {return row.id === id;}));
      _this.setState({
        suggests: suggests,
        selected: selected.filter(function (row) {return row.id !== id;}) });

    }, _this.
    onSelected = function (e, id) {
      e.preventDefault();var _this$state2 =
      _this.state,suggests = _this$state2.suggests,selected = _this$state2.selected;
      selected.push(suggests.find(function (row) {return row.id === id;}));
      _this.setState({ suggests: suggests.filter(function (row) {return row.id !== id;}), selected: selected });
    }, _this.
    onChange = function (_ref2) {var value = _ref2.target.value;return _this.setState({ input: value });}, _this.
    onFocus = function () {return _this.setState({ active: true });}, _this.
    onBlur = function () {return _this.setState({ active: false });}, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(AutocompleteExample, [{ key: 'render', value: function render()
    {
      var props = _extends({},
      this.state, {
        onClearClick: this.onClearClick,
        onSelected: this.onSelected,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur });

      return (
        React.createElement(Autocomplete, props));

    } }]);return AutocompleteExample;}(Component);


export default AutocompleteExample;