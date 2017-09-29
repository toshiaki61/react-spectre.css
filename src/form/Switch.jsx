import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import uniqueId from './uniqueId';

const Switch = ({ children, className, ...props }) => {
  const classes = classnames('form-switch', className);
  const id = uniqueId('switch');
  return (
    <label className={classes} htmlFor={id}>
      <input type="checkbox" {...props} id={id} />
      <i className="form-icon" /> {children}
    </label>
  );
};

Switch.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
Switch.defaultProps = {
  className: '',
};

export default Switch;
