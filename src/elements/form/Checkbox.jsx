/* @flow */
import React from 'react';
import classnames from 'classnames';

import uniqueId from './uniqueId';

export type CheckboxSingleProps = {
  label: React.DOM,
  className?: string,
};
const CheckboxSingle = ({ label, className, ...props }: CheckboxSingleProps) => {
  const classes = classnames('form-checkbox', className);
  const id = uniqueId('checkbox');
  return (
    <label className={classes} htmlFor={id} {...props}>
      <input id={id} type="checkbox" />
      <i className="form-icon" /> {label}
    </label>
  );
};
CheckboxSingle.defaultProps = {
  className: '',
};

export type CheckboxProps = CheckboxSingleProps & {
  options: {
    [key: string]: string,
  },
};
const Checkbox = ({ className, label, options, ...props }: CheckboxProps) => {
  const keys = Object.keys(options);
  if (keys.length === 0) {
    return <CheckboxSingle label={label} className={className} {...props} />;
  }
  const list = keys.map(key =>
    <CheckboxSingle key={key} label={options[key]} className={className} value={key} {...props} />);
  return (
    <div className="form-group">
      <span className="form-label">{label}</span>
      {list}
    </div>
  );
};
Checkbox.defaultProps = {
  options: {},
};

export default Checkbox;
