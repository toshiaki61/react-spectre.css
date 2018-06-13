
import * as React from 'react';
import classnames from 'classnames';

import Button from '../elements/Button';var bpfrpt_proptype_ToastProps = { title: PropTypes.string, content: PropTypes.string.isRequired, onClearClick: PropTypes.func, primary: PropTypes.bool, success: PropTypes.bool, warning: PropTypes.bool, error: PropTypes.bool };










var Toast = function Toast(_ref)







{var title = _ref.title,content = _ref.content,onClearClick = _ref.onClearClick,primary = _ref.primary,success = _ref.success,warning = _ref.warning,error = _ref.error;
  var classes = classnames('toast', {
    'toast-primary': primary,
    'toast-success': success,
    'toast-warning': warning,
    'toast-error': error });

  return (
    React.createElement('div', { className: classes },
      onClearClick ?
      React.createElement(Button, { clear: true, className: 'float-right', onClick: onClearClick }) :
      null,
      title ? React.createElement('h5', null, title) : null,
      content));


};Toast.propTypes = bpfrpt_proptype_ToastProps;
Toast.defaultProps = {
  title: '',
  onClearClick: undefined,
  primary: false,
  success: false,
  warning: false,
  error: false };


export default Toast;import PropTypes from 'prop-types';export { bpfrpt_proptype_ToastProps };