import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Loading = ({ lg, className }) => {
  const classes = classnames('loading', {
    'loading-lg': lg,
  }, className);
  return (
    <div className={classes} />
  );
};
Loading.propTypes = {
  lg: PropTypes.bool,
  className: PropTypes.string,
};
Loading.defaultProps = {
  lg: false,
  className: '',
};

export default Loading;
