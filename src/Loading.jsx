import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Loading = ({ className, lg, ...props }) => {
  const classes = classnames('loading', {
    'loading-lg': lg,
  }, className);
  return (
    <div className={classes} {...props} />
  );
};

Loading.propTypes = {
  className: PropTypes.string,
  lg: PropTypes.bool,
};
Loading.defaultProps = {
  className: '',
  lg: false,
};

export default Loading;
