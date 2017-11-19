var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import uniqueId from './uniqueId';var babelPluginFlowReactPropTypes_proptype_RadioSingleProps = { label: require('prop-types').string, name: require('prop-types').string.isRequired, className: require('prop-types').string, checked: require('prop-types').bool };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_RadioSingleProps', { value: babelPluginFlowReactPropTypes_proptype_RadioSingleProps, configurable: true, enumerable: true });







var RadioSingle = function RadioSingle(_ref) {var label = _ref.label,className = _ref.className,name = _ref.name,checked = _ref.checked,props = _objectWithoutProperties(_ref, ['label', 'className', 'name', 'checked']);
  var classes = classnames('form-radio', className);
  var id = uniqueId('radio');
  return (
    React.createElement('label', { className: classes, htmlFor: id },
      React.createElement('input', _extends({ type: 'radio', name: name, checked: checked, id: id }, props)),
      React.createElement('i', { className: 'form-icon' }), ' ', label));


};RadioSingle.propTypes = babelPluginFlowReactPropTypes_proptype_RadioSingleProps;
RadioSingle.defaultProps = {
  label: '',
  className: '',
  checked: false };var babelPluginFlowReactPropTypes_proptype_RadioProps = { label: require('prop-types').string, name: require('prop-types').string.isRequired, className: require('prop-types').string, checked: require('prop-types').bool, options: require('prop-types').shape({}).isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_RadioProps', { value: babelPluginFlowReactPropTypes_proptype_RadioProps, configurable: true, enumerable: true });







var Radio = function Radio(_ref2) {var name = _ref2.name,label = _ref2.label,options = _ref2.options,props = _objectWithoutProperties(_ref2, ['name', 'label', 'options']);
  var keys = Object.keys(options);
  if (keys.length === 0) {
    return React.createElement(RadioSingle, _extends({ label: label, name: name }, props));
  }
  var list = keys.map(function (key) {return (
      React.createElement(RadioSingle, _extends({ key: key, label: options[key], name: name, value: key }, props)));});
  return (
    React.createElement('div', { className: 'form-group' },
      React.createElement('span', { className: 'form-label' }, label),
      list));


};Radio.propTypes = babelPluginFlowReactPropTypes_proptype_RadioProps;
Radio.defaultProps = {
  options: {} };


export default Radio;