var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';var babelPluginFlowReactPropTypes_proptype_LabelProps = { children: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired, className: require('prop-types').string, rounded: require('prop-types').bool, primary: require('prop-types').bool, secondary: require('prop-types').bool, success: require('prop-types').bool, warning: require('prop-types').bool, error: require('prop-types').bool };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_LabelProps', { value: babelPluginFlowReactPropTypes_proptype_LabelProps, configurable: true, enumerable: true });











var Label = function Label(_ref)









{var children = _ref.children,className = _ref.className,rounded = _ref.rounded,primary = _ref.primary,secondary = _ref.secondary,success = _ref.success,warning = _ref.warning,error = _ref.error,props = _objectWithoutProperties(_ref, ['children', 'className', 'rounded', 'primary', 'secondary', 'success', 'warning', 'error']);
  var classes = classnames('label', {
    'label-rounded': rounded,
    'label-primary': primary,
    'label-secondary': secondary,
    'label-success': success,
    'label-warning': warning,
    'label-error': error },
  className);
  return (
    React.createElement('span', _extends({ className: classes }, props), children));

};Label.propTypes = babelPluginFlowReactPropTypes_proptype_LabelProps;
Label.defaultProps = {
  className: '',
  rounded: false,
  primary: false,
  secondary: false,
  success: false,
  warning: false,
  error: false };


export default Label;