var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}import React, { Component } from 'react';

import Filter from '../experimentals/Filter';var














FilterExample = function (_Component) {_inherits(FilterExample, _Component);function FilterExample() {var _ref;var _temp, _this, _ret;_classCallCheck(this, FilterExample);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FilterExample.__proto__ || Object.getPrototypeOf(FilterExample)).call.apply(_ref, [this].concat(args))), _this), _this.
























    state = {
      active: 'tag-0' }, _this.

    onChange = function (e, id) {return _this.setState({ active: id });}, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(FilterExample, [{ key: 'render', value: function render()
    {var _props =
      this.props,tags = _props.tags,data = _props.data;var
      active = this.state.active;
      return (
        React.createElement(Filter, { tags: tags, data: data, active: active, onChange: this.onChange }));

    } }]);return FilterExample;}(Component);FilterExample.defaultProps = { tags: { 'tag-0': 'All', 'tag-1': 'Action', 'tag-2': 'Roleplaying', 'tag-3': 'Shooter', 'tag-4': 'Sports' }, data: [{ tag: 'tag-2', title: 'Fallout 4', subtitle: 'Roleplaying' }, { tag: 'tag-3', title: 'Halo 5', subtitle: 'Shooter' }, { tag: 'tag-1', title: 'Quantum Break', subtitle: 'Action' }, { tag: 'tag-4', title: 'Forza Horizon 3', subtitle: 'Sports' }, { tag: 'tag-2', title: 'Final Fantasy XV', subtitle: 'Roleplaying' }, { tag: 'tag-4', title: 'NBA 2K17', subtitle: 'Sports' }, { tag: 'tag-3', title: 'Battlefield 1', subtitle: 'Shooter' }, { tag: 'tag-1', title: 'GTA V', subtitle: 'Action' }, { tag: 'tag-4', title: 'FIFA 17', subtitle: 'Sports' }, { tag: 'tag-3', title: 'Overwatch', subtitle: 'Shooter' }, { tag: 'tag-3', title: 'Titanfall 2', subtitle: 'Shooter' }, { tag: 'tag-3', title: 'Gears of Wars 4', subtitle: 'Shooter' }] };


export default FilterExample;