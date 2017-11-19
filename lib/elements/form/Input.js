var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import Form from './Form';
import uniqueId from './uniqueId';var babelPluginFlowReactPropTypes_proptype_BaseInputProps = { className: require('prop-types').string.isRequired, success: require('prop-types').bool.isRequired, danger: require('prop-types').bool.isRequired, sm: require('prop-types').bool.isRequired, lg: require('prop-types').bool.isRequired, textarea: require('prop-types').bool.isRequired, slider: require('prop-types').bool.isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_BaseInputProps', { value: babelPluginFlowReactPropTypes_proptype_BaseInputProps, configurable: true, enumerable: true });










var BaseInput = function BaseInput(_ref)








{var className = _ref.className,success = _ref.success,danger = _ref.danger,textarea = _ref.textarea,slider = _ref.slider,sm = _ref.sm,lg = _ref.lg,props = _objectWithoutProperties(_ref, ['className', 'success', 'danger', 'textarea', 'slider', 'sm', 'lg']);
  var classes = classnames(className, {
    'form-input': !slider,
    'is-success': success,
    'is-danger': danger,
    'input-lg': lg,
    'input-sm': sm });

  if (textarea) {
    return React.createElement('textarea', _extends({ className: classes }, props));
  }
  if (slider) {
    return React.createElement('input', _extends({}, props, { type: 'range', className: 'slider tooltip' }));
  }
  return React.createElement('input', _extends({}, props, { className: classes }));
};BaseInput.propTypes = babelPluginFlowReactPropTypes_proptype_BaseInputProps;
BaseInput.defaultProps = {};var babelPluginFlowReactPropTypes_proptype_InputProps = { className: require('prop-types').string.isRequired, success: require('prop-types').bool.isRequired, danger: require('prop-types').bool.isRequired, sm: require('prop-types').bool.isRequired, lg: require('prop-types').bool.isRequired, textarea: require('prop-types').bool.isRequired, slider: require('prop-types').bool.isRequired, label: require('prop-types').string, id: require('prop-types').string };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_InputProps', { value: babelPluginFlowReactPropTypes_proptype_InputProps, configurable: true, enumerable: true });





var Input = function Input(_ref2) {var label = _ref2.label,id = _ref2.id,props = _objectWithoutProperties(_ref2, ['label', 'id']);
  var elementId = id || uniqueId('input');
  var content = React.createElement(BaseInput, _extends({ id: elementId }, props));
  if (label) {
    return (
      React.createElement(Form.Group, null,
        React.createElement(Form.Label, { htmlFor: elementId }, label),
        content));


  }
  return content;
};Input.propTypes = babelPluginFlowReactPropTypes_proptype_InputProps;
Input.defaultProps = {
  className: '',
  success: false,
  danger: false,
  sm: false,
  lg: false,
  textarea: false,
  label: '',
  id: '' };var babelPluginFlowReactPropTypes_proptype_GroupProps = { children: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired, className: require('prop-types').string, success: require('prop-types').bool, danger: require('prop-types').bool };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_GroupProps', { value: babelPluginFlowReactPropTypes_proptype_GroupProps, configurable: true, enumerable: true });








var Group = function Group(_ref3)





{var children = _ref3.children,className = _ref3.className,success = _ref3.success,danger = _ref3.danger,props = _objectWithoutProperties(_ref3, ['children', 'className', 'success', 'danger']);
  var classes = classnames('input-group', className, { 'has-success': success, 'has-danger': danger });
  return (
    React.createElement('div', _extends({}, props, { className: classes }),
      children));


};Group.propTypes = babelPluginFlowReactPropTypes_proptype_GroupProps;
Group.defaultProps = {
  className: '',
  success: false,
  danger: false };var babelPluginFlowReactPropTypes_proptype_AddonProps = { children: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired, className: require('prop-types').string, sm: require('prop-types').bool, lg: require('prop-types').bool };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_AddonProps', { value: babelPluginFlowReactPropTypes_proptype_AddonProps, configurable: true, enumerable: true });








var Addon = function Addon(_ref4) {var children = _ref4.children,className = _ref4.className,sm = _ref4.sm,lg = _ref4.lg,props = _objectWithoutProperties(_ref4, ['children', 'className', 'sm', 'lg']);
  var classes = classnames('input-group-addon', className, { 'addon-sm': sm, 'addon-lg': lg });
  return (
    React.createElement('span', _extends({}, props, { className: classes }),
      children));


};Addon.propTypes = babelPluginFlowReactPropTypes_proptype_AddonProps;
Addon.defaultProps = {
  className: '',
  sm: false,
  lg: false };


Input.Group = Group;
Input.Addon = Addon;

export default Input;