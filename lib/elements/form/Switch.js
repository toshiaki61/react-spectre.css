var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import uniqueId from './uniqueId';var bpfrpt_proptype_SwitchProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, className: PropTypes.string };





var Switch = function Switch(_ref) {var children = _ref.children,className = _ref.className,props = _objectWithoutProperties(_ref, ['children', 'className']);
  var classes = classnames('form-switch', className);
  var id = uniqueId('switch');
  return (
    React.createElement('label', { className: classes, htmlFor: id },
      React.createElement('input', _extends({ type: 'checkbox' }, props, { id: id })),
      React.createElement('i', { className: 'form-icon' }), ' ', children));


};Switch.propTypes = bpfrpt_proptype_SwitchProps;
Switch.defaultProps = {
  className: '' };


export default Switch;import PropTypes from 'prop-types';export { bpfrpt_proptype_SwitchProps };