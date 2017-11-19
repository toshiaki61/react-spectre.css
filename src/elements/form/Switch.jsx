/* @flow */
import * as React from 'react';
import classnames from 'classnames';

import uniqueId from './uniqueId';

export type SwitchProps = {
  children: React.DOM,
  className?: string,
};
const Switch = ({ children, className, ...props }: SwitchProps) => {
  const classes = classnames('form-switch', className);
  const id = uniqueId('switch');
  return (
    <label className={classes} htmlFor={id}>
      <input type="checkbox" {...props} id={id} />
      <i className="form-icon" /> {children}
    </label>
  );
};
Switch.defaultProps = {
  className: '',
};

export default Switch;
