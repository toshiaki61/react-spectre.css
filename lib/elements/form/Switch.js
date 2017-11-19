var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import uniqueId from './uniqueId';var babelPluginFlowReactPropTypes_proptype_SwitchProps = { children: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired, className: require('prop-types').string };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_SwitchProps', { value: babelPluginFlowReactPropTypes_proptype_SwitchProps, configurable: true, enumerable: true });





var Switch = function Switch(_ref) {var children = _ref.children,className = _ref.className,props = _objectWithoutProperties(_ref, ['children', 'className']);
  var classes = classnames('form-switch', className);
  var id = uniqueId('switch');
  return (
    React.createElement('label', { className: classes, htmlFor: id },
      React.createElement('input', _extends({ type: 'checkbox' }, props, { id: id })),
      React.createElement('i', { className: 'form-icon' }), ' ', children));


};Switch.propTypes = babelPluginFlowReactPropTypes_proptype_SwitchProps;
Switch.defaultProps = {
  className: '' };


export default Switch;