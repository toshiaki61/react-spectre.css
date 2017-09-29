import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import uniqueId from './uniqueId';

const CheckboxSingle = ({ label, className, ...props }) => {
  const classes = classnames('form-checkbox', className);
  const id = uniqueId('checkbox');
  return (
    <label className={classes} htmlFor={id} {...props}>
      <input id={id} type="checkbox" />
      <i className="form-icon" /> {label}
    </label>
  );
};

CheckboxSingle.propTypes = {
  label: PropTypes.node.isRequired,
  className: PropTypes.string,
};
CheckboxSingle.defaultProps = {
  className: '',
};

const Checkbox = ({ name, label, options, ...props }) => {
  const keys = Object.keys(options);
  if (keys.length === 0) {
    return <CheckboxSingle label={label} name={name} {...props} />;
  }
  const list = keys.map(key =>
    <CheckboxSingle key={key} label={options[key]} name={name} value={key} {...props} />);
  return (
    <div className="form-group">
      <span className="form-label">{label}</span>
      {list}
    </div>
  );
};

Checkbox.propTypes = {
  ...CheckboxSingle.propTypes,
  options: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  }),
};
Checkbox.defaultProps = {
  options: {},
};
export default Checkbox;
