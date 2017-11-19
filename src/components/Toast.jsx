/* @flow */
import * as React from 'react';
import classnames from 'classnames';

import Button from '../elements/Button';

export type ToastProps = {
  title?: string,
  content: string,
  onClearClick?: (e: Event) => void,
  primary?: boolean,
  success?: boolean,
  warning?: boolean,
  error?: boolean,
};
const Toast = ({
  title,
  content,
  onClearClick,
  primary,
  success,
  warning,
  error,
}: ToastProps): React.Element<*> => {
  const classes = classnames('toast', {
    'toast-primary': primary,
    'toast-success': success,
    'toast-warning': warning,
    'toast-error': error,
  });
  return (
    <div className={classes}>
      {onClearClick ? <Button clear className="float-right" onClick={onClearClick} /> : null}
      {title ? <h5>{title}</h5> : null}
      {content}
    </div>
  );
};
Toast.defaultProps = {
  title: '',
  onClearClick: undefined,
  primary: false,
  success: false,
  warning: false,
  error: false,
};

export default Toast;
