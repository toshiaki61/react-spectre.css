import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const Label = ({
  children,
  className,
  rounded,
  primary,
  secondary,
  success,
  warning,
  error,
  ...props
}) => {
  const classes = classnames('label', {
    'label-rounded': rounded,
    'label-primary': primary,
    'label-secondary': secondary,
    'label-success': success,
    'label-warning': warning,
    'label-error': error,
  }, className);
  return (
    <span className={classes} {...props}>{children}</span>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  rounded: PropTypes.rounded,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
};
Label.defaultProps = {
  className: '',
  rounded: false,
  primary: false,
  secondary: false,
  success: false,
  warning: false,
  error: false,
};

export default Label;
