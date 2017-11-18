
import React from 'react';
import classnames from 'classnames';

import Button from '../elements/Button';










var Toast = function Toast(_ref) {var title = _ref.title,content = _ref.content,onClearClick = _ref.onClearClick,primary = _ref.primary,success = _ref.success,warning = _ref.warning,error = _ref.error;
  var classes = classnames('toast', {
    'toast-primary': primary,
    'toast-success': success,
    'toast-warning': warning,
    'toast-error': error });

  return (
    React.createElement('div', { className: classes },
      onClearClick ? React.createElement(Button, { clear: true, className: 'float-right', onClick: onClearClick }) : null,
      title ? React.createElement('h5', null, title) : null,
      content));


};
Toast.defaultProps = {
  title: '',
  onClearClick: undefined,
  primary: false,
  success: false,
  warning: false,
  error: false };


export default Toast;