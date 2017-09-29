import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Form = ({ children, className, horizontal, ...props }) => {
  const classes = classnames(className, { 'form-horizontal': horizontal });
  return (
    <form {...props} className={classes} >
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  horizontal: PropTypes.bool,
};

Form.defaultProps = {
  className: '',
  horizontal: false,
};

export default Form;

const Group = ({ children, className, success, danger, ...props }) => {
  const classes = classnames('form-group', className, { 'has-success': success, 'has-danger': danger });
  return (
    <div {...props} className={classes} >
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

const Label = ({ children, className, htmlFor, ...props }) => {
  const classes = classnames('form-label', className);
  if (htmlFor) {
    return (
      <label {...props} className={classes} htmlFor={htmlFor}>
        {children}
      </label>
    );
  }
  return (
    <span {...props} className={classes}>
      {children}
    </span>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
};
Label.defaultProps = {
  className: '',
  htmlFor: '',
};

export { Group, Label };
