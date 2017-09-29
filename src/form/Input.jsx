import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Group as FormGroup, Label as FormLabel } from './Form';
import uniqueId from './uniqueId';

const BaseInput = ({ className, success, danger, textarea, slider, sm, lg, ...props }) => {
  const classes = classnames(
    className,
    {
      'form-input': !slider,
      'is-success': success,
      'is-danger': danger,
      'input-lg': lg,
      'input-sm': sm,
    });
  if (textarea) {
    return <textarea className={classes} {...props} />;
  }
  if (slider) {
    return <input {...props} type="range" className="slider tooltip" />;
  }
  return <input {...props} className={classes} />;
};

BaseInput.propTypes = {
  className: PropTypes.string,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
  textarea: PropTypes.bool,
  slider: PropTypes.bool,
};
BaseInput.defaultProps = {
  className: '',
  success: false,
  danger: false,
  sm: false,
  lg: false,
  textarea: false,
  slider: false,
};

const Input = ({ label, ...props }) => {
  const id = props.id || uniqueId('input');
  const content = <BaseInput id={id} {...props} />;
  if (label) {
    return (
      <FormGroup>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        {content}
      </FormGroup>
    );
  }
  return content;
};

Input.propTypes = {
  ...BaseInput.propTypes,
  className: PropTypes.string,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
  textarea: PropTypes.bool,
  label: PropTypes.string,
};
Input.defaultProps = {
  className: '',
  success: false,
  danger: false,
  sm: false,
  lg: false,
  textarea: false,
  label: '',
};

export default Input;

const Group = ({ children, className, success, danger, ...props }) => {
  const classes = classnames('input-group', className, { 'has-success': success, 'has-danger': danger });
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

Group.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  success: PropTypes.bool,
  danger: PropTypes.bool,
};
Group.defaultProps = {
  className: '',
  success: false,
  danger: false,
};

const Addon = ({ children, className, sm, lg, ...props }) => {
  const classes = classnames('input-group-addon', className, { 'addon-sm': sm, 'addon-lg': lg });
  return (
    <span {...props} className={classes} >
      {children}
    </span>
  );
};

Addon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
};
Addon.defaultProps = {
  className: '',
  sm: false,
  lg: false,
};

export { Group, Addon };

