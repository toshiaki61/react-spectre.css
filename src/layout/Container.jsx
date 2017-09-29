import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Container = ({ children, className, xs, sm, md, lg, xl, ...props }) => {
  const classes = classnames(
    'container', xs, sm, md, lg, xl, className,
  );
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
};
Container.defaultProps = {
  className: '',
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
};

export default Container;
