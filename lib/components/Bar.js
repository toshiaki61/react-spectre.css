var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import Button from '../elements/Button';var babelPluginFlowReactPropTypes_proptype_ItemProps = { small: require('prop-types').bool, tooltip: require('prop-types').string, content: require('prop-types').oneOfType([typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, require('prop-types').string]) };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_ItemProps', { value: babelPluginFlowReactPropTypes_proptype_ItemProps, configurable: true, enumerable: true });






var Item = function Item(_ref) {var small = _ref.small,tooltip = _ref.tooltip,content = _ref.content,props = _objectWithoutProperties(_ref, ['small', 'tooltip', 'content']);
  var classes = classnames('bar-item', { tooltip: tooltip });
  return (
    React.createElement('div', _extends({
        className: classes,
        'data-tooltip': tooltip },
      props),

      small ? null : content));


};Item.propTypes = babelPluginFlowReactPropTypes_proptype_ItemProps;
Item.defaultProps = {
  small: false,
  tooltip: '',
  content: '' };var babelPluginFlowReactPropTypes_proptype_ProgressBarItemProps = _defineProperty({ small: require('prop-types').bool, tooltip: require('prop-types').string, content: require('prop-types').oneOfType([typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, require('prop-types').string]), value: require('prop-types').string.isRequired, role: require('prop-types').string.isRequired, style: require('prop-types').shape({ width: require('prop-types').string.isRequired }).isRequired }, 'content', typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired);if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_ProgressBarItemProps', { value: babelPluginFlowReactPropTypes_proptype_ProgressBarItemProps, configurable: true, enumerable: true });var babelPluginFlowReactPropTypes_proptype_BarProps = { className: require('prop-types').string, small: require('prop-types').bool, slider: require('prop-types').bool, items: require('prop-types').arrayOf(require('prop-types').shape(_defineProperty({ small: require('prop-types').bool, tooltip: require('prop-types').string, content: require('prop-types').oneOfType([typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, require('prop-types').string]), value: require('prop-types').string.isRequired, role: require('prop-types').string.isRequired, style: require('prop-types').shape({ width: require('prop-types').string.isRequired }).isRequired }, 'content', typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired))).isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_BarProps', { value: babelPluginFlowReactPropTypes_proptype_BarProps, configurable: true, enumerable: true });














var Bar = function Bar(_ref2) {var className = _ref2.className,small = _ref2.small,slider = _ref2.slider,items = _ref2.items;
  var classes = classnames('bar', {
    'bar-sm': small,
    'bar-slider': slider },
  className);
  return (
    React.createElement('div', { className: classes },
      items.map(function (item, i) {
        var key = 'bar-item-' + i;
        if (slider) {
          var _value = item.value + '%';
          Object.assign(item, {
            role: 'progressbar',
            style: { width: _value },
            content: React.createElement(Button, { className: 'bar-slider-btn tooltip', 'data-tooltip': _value }) });

        }
        return (
          React.createElement(Item, _extends({ key: key, small: small }, item)));

      })));


};Bar.propTypes = babelPluginFlowReactPropTypes_proptype_BarProps;
Bar.defaultProps = {
  className: '',
  small: false,
  slider: false };


export default Bar;