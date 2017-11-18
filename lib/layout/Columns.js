var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}import React from 'react';
import classnames from 'classnames';

import Container from './Container';







var ColumnsWithoutContainer = function ColumnsWithoutContainer(_ref) {var children = _ref.children,gapless = _ref.gapless,oneline = _ref.oneline,className = _ref.className,props = _objectWithoutProperties(_ref, ['children', 'gapless', 'oneline', 'className']);
  var classes = classnames('columns', {
    'col-gapless': gapless,
    'col-oneline': oneline },
  className);

  return (
    React.createElement('div', _extends({ className: classes }, props),
      children));


};
ColumnsWithoutContainer.defaultProps = {
  className: '',
  gapless: false,
  oneline: false };


export function acquireContainerProps(option) {
  switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
    case 'boolean':
      return null;
    case 'string':
      return _defineProperty({}, option, true);
    default:
      return option;}

}
















var Columns = function Columns(_ref3) {var children = _ref3.children,container = _ref3.container,props = _objectWithoutProperties(_ref3, ['children', 'container']);
  var content = React.createElement(ColumnsWithoutContainer, props, children);

  if (!container) {
    return content;
  }
  var containerProps = acquireContainerProps(container);
  return (
    React.createElement(Container, containerProps,
      content));


};
Columns.defaultProps = {
  container: false };


export default Columns;