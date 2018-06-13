var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';var bpfrpt_proptype_LabelProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, className: PropTypes.string, rounded: PropTypes.bool, primary: PropTypes.bool, secondary: PropTypes.bool, success: PropTypes.bool, warning: PropTypes.bool, error: PropTypes.bool };











var Label = function Label(_ref)









{var children = _ref.children,className = _ref.className,rounded = _ref.rounded,primary = _ref.primary,secondary = _ref.secondary,success = _ref.success,warning = _ref.warning,error = _ref.error,props = _objectWithoutProperties(_ref, ['children', 'className', 'rounded', 'primary', 'secondary', 'success', 'warning', 'error']);
  var classes = classnames(
  'label',
  {
    'label-rounded': rounded,
    'label-primary': primary,
    'label-secondary': secondary,
    'label-success': success,
    'label-warning': warning,
    'label-error': error },

  className);

  return (
    React.createElement('span', _extends({ className: classes }, props),
      children));


};Label.propTypes = bpfrpt_proptype_LabelProps;
Label.defaultProps = {
  className: '',
  rounded: false,
  primary: false,
  secondary: false,
  success: false,
  warning: false,
  error: false };


export default Label;import PropTypes from 'prop-types';export { bpfrpt_proptype_LabelProps };