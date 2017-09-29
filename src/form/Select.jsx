import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Group as FormGroup, Label as FormLabel } from './Form';

const SelectOnly = ({ children, className, sm, lg, ...props }) => {
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

SelectOnly.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
};
SelectOnly.defaultProps = {
  children: null,
  className: '',
  sm: false,
  lg: false,
};

const Select = ({ children, label, options, ...props }) => {
  const labelNode = label ? <FormLabel>{label}</FormLabel> : null;
  const keys = Object.keys(options);
  if (keys.length > 0) {
    return (
      <FormGroup>
        {labelNode}
        <SelectOnly {...props}>
          {keys.map(key => (
            <option key={key}>{options[key]}</option>
          ))}
        </SelectOnly>
      </FormGroup>
    );
  }
  return (
    <SelectOnly {...props}>
      {children}
    </SelectOnly>
  );
};

Select.propTypes = {
  ...SelectOnly.propTypes,
  label: PropTypes.string,
  options: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  }),
};
Select.defaultProps = {
  label: '',
  options: {},
};

export default Select;
export { SelectOnly };
