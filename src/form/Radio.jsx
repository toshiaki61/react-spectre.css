import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import uniqueId from './uniqueId';

const RadioSingle = ({ label, className, name, checked, ...props }) => {
  const classes = classnames('form-radio', className);
  const id = uniqueId('radio');
  return (
    <label className={classes} htmlFor={id}>
      <input type="radio" name={name} checked={checked} id={id} {...props} />
      <i className="form-icon" /> {label}
    </label>
  );
};

RadioSingle.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  checked: PropTypes.bool,
};
RadioSingle.defaultProps = {
  label: '',
  className: '',
  checked: false,
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

Radio.propTypes = {
  ...RadioSingle.propTypes,
  options: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  }),
};
Radio.defaultProps = {
  options: {},
};

export default Radio;
