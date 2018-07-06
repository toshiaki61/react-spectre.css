var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import Form from './Form';
import uniqueId from './uniqueId';var bpfrpt_proptype_BaseInputProps = { className: PropTypes.string.isRequired, success: PropTypes.bool.isRequired, danger: PropTypes.bool.isRequired, sm: PropTypes.bool.isRequired, lg: PropTypes.bool.isRequired, textarea: PropTypes.bool.isRequired, slider: PropTypes.bool };










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
};BaseInput.propTypes = bpfrpt_proptype_BaseInputProps;
BaseInput.defaultProps = {};var bpfrpt_proptype_InputProps = { className: PropTypes.string.isRequired, success: PropTypes.bool.isRequired, danger: PropTypes.bool.isRequired, sm: PropTypes.bool.isRequired, lg: PropTypes.bool.isRequired, textarea: PropTypes.bool.isRequired, slider: PropTypes.bool, label: PropTypes.string, id: PropTypes.string };





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
};Input.propTypes = bpfrpt_proptype_InputProps;
Input.defaultProps = {
  className: '',
  success: false,
  danger: false,
  sm: false,
  lg: false,
  textarea: false,
  label: '',
  id: '' };var bpfrpt_proptype_GroupProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, className: PropTypes.string, success: PropTypes.bool, danger: PropTypes.bool };








var Group = function Group(_ref3)





{var children = _ref3.children,className = _ref3.className,success = _ref3.success,danger = _ref3.danger,props = _objectWithoutProperties(_ref3, ['children', 'className', 'success', 'danger']);
  var classes = classnames('input-group', className, {
    'has-success': success,
    'has-danger': danger });

  return (
    React.createElement('div', _extends({}, props, { className: classes }),
      children));


};Group.propTypes = bpfrpt_proptype_GroupProps;
Group.defaultProps = {
  className: '',
  success: false,
  danger: false };var bpfrpt_proptype_AddonProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, className: PropTypes.string, sm: PropTypes.bool, lg: PropTypes.bool };









var Addon = function Addon(_ref4)





{var children = _ref4.children,className = _ref4.className,sm = _ref4.sm,lg = _ref4.lg,props = _objectWithoutProperties(_ref4, ['children', 'className', 'sm', 'lg']);
  var classes = classnames('input-group-addon', className, {
    'addon-sm': sm,
    'addon-lg': lg });

  return (
    React.createElement('span', _extends({}, props, { className: classes }),
      children));


};Addon.propTypes = bpfrpt_proptype_AddonProps;
Addon.defaultProps = {
  className: '',
  sm: false,
  lg: false };


Input.Group = Group;
Input.Addon = Addon;

export default Input;import PropTypes from 'prop-types';export { bpfrpt_proptype_BaseInputProps };export { bpfrpt_proptype_InputProps };export { bpfrpt_proptype_GroupProps };export { bpfrpt_proptype_AddonProps };