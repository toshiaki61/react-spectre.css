/* @flow */
import React from 'react';
import classnames from 'classnames';

import uniqueId from './uniqueId';

export RadioSingleProps = {
  label: string,
  name: string,
  className: string,
  checked: boolean,
};
const RadioSingle = ({ label, className, name, checked, ...props }: RadioSingleProps) => {
  const classes = classnames('form-radio', className);
  const id = uniqueId('radio');
  return (
    <label className={classes} htmlFor={id}>
      <input type="radio" name={name} checked={checked} id={id} {...props} />
      <i className="form-icon" /> {label}
    </label>
  );
};
RadioSingle.defaultProps = {
  label: '',
  className: '',
  checked: false,
};


export type RadioProps = RadioSingleProps & {
  options: {
    [key: string]: string,
  },
};
const Radio = ({ name, label, options, ...props }) => {
  const keys = Object.keys(options);
  if (keys.length === 0) {
    return <RadioSingle label={label} name={name} {...props} />;
  }
  const list = keys.map(key =>
    <RadioSingle key={key} label={options[key]} name={name} value={key} {...props} />);
  return (
    <div className="form-group">
      <span className="form-label">{label}</span>
      {list}
    </div>
  );
};
Radio.defaultProps = {
  options: {},
};

export default Radio;
