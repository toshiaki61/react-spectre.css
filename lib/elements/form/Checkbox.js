var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import uniqueId from './uniqueId';var babelPluginFlowReactPropTypes_proptype_CheckboxSingleProps = { children: require('prop-types').node, label: require('prop-types').string.isRequired, className: require('prop-types').string };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CheckboxSingleProps', { value: babelPluginFlowReactPropTypes_proptype_CheckboxSingleProps, configurable: true, enumerable: true });






var CheckboxSingle = function CheckboxSingle(_ref)



{var children = _ref.children,label = _ref.label,className = _ref.className,props = _objectWithoutProperties(_ref, ['children', 'label', 'className']);
  var classes = classnames('form-checkbox', className);
  var id = uniqueId('checkbox');
  return (
    React.createElement('label', _extends({ className: classes, htmlFor: id }, props),
      React.createElement('input', { id: id, type: 'checkbox' }),
      React.createElement('i', { className: 'form-icon' }), ' ', label, ' ', children));


};CheckboxSingle.propTypes = babelPluginFlowReactPropTypes_proptype_CheckboxSingleProps;
CheckboxSingle.defaultProps = {
  children: null,
  className: '' };var babelPluginFlowReactPropTypes_proptype_CheckboxProps = { children: require('prop-types').node, label: require('prop-types').string.isRequired, className: require('prop-types').string, options: require('prop-types').shape({}).isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_CheckboxProps', { value: babelPluginFlowReactPropTypes_proptype_CheckboxProps, configurable: true, enumerable: true });







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


};Checkbox.propTypes = babelPluginFlowReactPropTypes_proptype_CheckboxProps;
Checkbox.defaultProps = {
  options: {} };


export default Checkbox;