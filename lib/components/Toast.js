var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import Button from '../elements/Button';var bpfrpt_proptype_ToastProps = { title: PropTypes.string, content: PropTypes.string.isRequired, className: PropTypes.string.isRequired, onClearClick: PropTypes.func, primary: PropTypes.bool, success: PropTypes.bool, warning: PropTypes.bool, error: PropTypes.bool };











var Toast = function Toast(_ref)









{var title = _ref.title,content = _ref.content,className = _ref.className,onClearClick = _ref.onClearClick,primary = _ref.primary,success = _ref.success,warning = _ref.warning,error = _ref.error,props = _objectWithoutProperties(_ref, ['title', 'content', 'className', 'onClearClick', 'primary', 'success', 'warning', 'error']);
  var classes = classnames('toast', className, {
    'toast-primary': primary,
    'toast-success': success,
    'toast-warning': warning,
    'toast-error': error });

  return (
    React.createElement('div', _extends({ className: classes }, props),
      onClearClick ?
      React.createElement(Button, { clear: true, className: 'float-right', onClick: onClearClick }) :
      null,
      title ? React.createElement('h5', null, title) : null,
      content));


};Toast.propTypes = bpfrpt_proptype_ToastProps;
Toast.defaultProps = {
  title: '',
  className: '',
  onClearClick: undefined,
  primary: false,
  success: false,
  warning: false,
  error: false };


export default Toast;import PropTypes from 'prop-types';export { bpfrpt_proptype_ToastProps };