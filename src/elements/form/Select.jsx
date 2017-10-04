/* @flow */
import React from 'react';
import classnames from 'classnames';

import Form from './Form';

export type SelectOnlyProps = {
  children?: React.DOM,
  className?: string,
  sm?: boolean,
  lg?: boolean,
};
const SelectOnly = ({ children, className, sm, lg, ...props }: SelectOnlyProps) => {
  const classes = classnames(
    'form-select',
    className,
    {
      'select-sm': sm,
      'select-lg': lg,
    },
  );
  return (
    <select className={classes} {...props}>
      {children}
    </select>
  );
};
SelectOnly.defaultProps = {
  children: null,
  className: '',
  sm: false,
  lg: false,
};

export type SelectProps = SelectOnlyProps & {
  label?: string,
  options: {
    [key: string]: string,
  },
};
const Select = ({ children, label, options, ...props }: SelectProps) => {
  const labelNode = label ? <Form.Label>{label}</Form.Label> : null;
  const keys = Object.keys(options);
  if (keys.length > 0) {
    return (
      <Form.Group>
        {labelNode}
        <SelectOnly {...props}>
          {keys.map(key => (
            <option key={key}>{options[key]}</option>
          ))}
        </SelectOnly>
      </Form.Group>
    );
  }
  return (
    <SelectOnly {...props}>
      {children}
    </SelectOnly>
  );
};
Select.defaultProps = {
  label: '',
  options: {},
};

export default Select;