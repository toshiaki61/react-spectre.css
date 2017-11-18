var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import React from 'react';
import classnames from 'classnames';

import uniqueId from './uniqueId';





var CheckboxSingle = function CheckboxSingle(_ref) {var label = _ref.label,className = _ref.className,props = _objectWithoutProperties(_ref, ['label', 'className']);
  var classes = classnames('form-checkbox', className);
  var id = uniqueId('checkbox');
  return (
    React.createElement('label', _extends({ className: classes, htmlFor: id }, props),
      React.createElement('input', { id: id, type: 'checkbox' }),
      React.createElement('i', { className: 'form-icon' }), ' ', label));


};
CheckboxSingle.defaultProps = {
  className: '' };







var Checkbox = function Checkbox(_ref2) {var className = _ref2.className,label = _ref2.label,options = _ref2.options,props = _objectWithoutProperties(_ref2, ['className', 'label', 'options']);
  var keys = Object.keys(options);
  if (keys.length === 0) {
    return React.createElement(CheckboxSingle, _extends({ label: label, className: className }, props));
  }
  var list = keys.map(function (key) {return (
      React.createElement(CheckboxSingle, _extends({ key: key, label: options[key], className: className, value: key }, props)));});
  return (
    React.createElement('div', { className: 'form-group' },
      React.createElement('span', { className: 'form-label' }, label),
      list));


};
Checkbox.defaultProps = {
  options: {} };


export default Checkbox;