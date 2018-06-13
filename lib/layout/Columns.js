var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}import * as React from 'react';
import classnames from 'classnames';

import Container from './Container';var bpfrpt_proptype_ColumnsWithoutContainerProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, className: PropTypes.string, gapless: PropTypes.bool, oneline: PropTypes.bool };







var ColumnsWithoutContainer = function ColumnsWithoutContainer(_ref)





{var children = _ref.children,gapless = _ref.gapless,oneline = _ref.oneline,className = _ref.className,props = _objectWithoutProperties(_ref, ['children', 'gapless', 'oneline', 'className']);
  var classes = classnames(
  'columns',
  {
    'col-gapless': gapless,
    'col-oneline': oneline },

  className);


  return (
    React.createElement('div', _extends({ className: classes }, props),
      children));


};ColumnsWithoutContainer.propTypes = bpfrpt_proptype_ColumnsWithoutContainerProps;
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

}var bpfrpt_proptype_ContainerProps = { className: PropTypes.string, xs: PropTypes.bool, sm: PropTypes.bool, md: PropTypes.bool, lg: PropTypes.bool, xl: PropTypes.bool };var bpfrpt_proptype_ColumnsProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, container: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.shape({ className: PropTypes.string, xs: PropTypes.bool, sm: PropTypes.bool, md: PropTypes.bool, lg: PropTypes.bool, xl: PropTypes.bool })]) };













var Columns = function Columns(_ref3)



{var children = _ref3.children,container = _ref3.container,props = _objectWithoutProperties(_ref3, ['children', 'container']);
  var content =
  React.createElement(ColumnsWithoutContainer, props, children);


  if (!container) {
    return content;
  }
  var containerProps = acquireContainerProps(container);
  return React.createElement(Container, containerProps, content);
};Columns.propTypes = bpfrpt_proptype_ColumnsProps;
Columns.defaultProps = {
  container: false };


export default Columns;import PropTypes from 'prop-types';export { bpfrpt_proptype_ColumnsWithoutContainerProps };export { bpfrpt_proptype_ContainerProps };export { bpfrpt_proptype_ColumnsProps };