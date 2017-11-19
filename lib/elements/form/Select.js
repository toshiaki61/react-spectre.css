var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import Form from './Form';var babelPluginFlowReactPropTypes_proptype_SelectOnlyProps = { children: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, className: require('prop-types').string, sm: require('prop-types').bool, lg: require('prop-types').bool };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_SelectOnlyProps', { value: babelPluginFlowReactPropTypes_proptype_SelectOnlyProps, configurable: true, enumerable: true });







var SelectOnly = function SelectOnly(_ref)





{var children = _ref.children,className = _ref.className,sm = _ref.sm,lg = _ref.lg,props = _objectWithoutProperties(_ref, ['children', 'className', 'sm', 'lg']);
  var classes = classnames(
  'form-select',
  className,
  {
    'select-sm': sm,
    'select-lg': lg });


  return (
    React.createElement('select', _extends({ className: classes }, props),
      children));


};SelectOnly.propTypes = babelPluginFlowReactPropTypes_proptype_SelectOnlyProps;
SelectOnly.defaultProps = {
  children: null,
  className: '',
  sm: false,
  lg: false };var babelPluginFlowReactPropTypes_proptype_SelectProps = { children: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, className: require('prop-types').string, sm: require('prop-types').bool, lg: require('prop-types').bool, label: require('prop-types').string, options: require('prop-types').shape({}).isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_SelectProps', { value: babelPluginFlowReactPropTypes_proptype_SelectProps, configurable: true, enumerable: true });








var Select = function Select(_ref2) {var children = _ref2.children,label = _ref2.label,options = _ref2.options,props = _objectWithoutProperties(_ref2, ['children', 'label', 'options']);
  var labelNode = label ? React.createElement(Form.Label, null, label) : null;
  var keys = Object.keys(options);
  if (keys.length > 0) {
    return (
      React.createElement(Form.Group, null,
        labelNode,
        React.createElement(SelectOnly, props,
          keys.map(function (key) {return (
              React.createElement('option', { key: key }, options[key]));}))));




  }
  return (
    React.createElement(SelectOnly, props,
      children));


};Select.propTypes = babelPluginFlowReactPropTypes_proptype_SelectProps;
Select.defaultProps = {
  label: '',
  options: {} };


export default Select;