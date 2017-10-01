/* @flow */
import React from 'react';
import classnames from 'classnames';

export type LoadingProps = {
  lg?: boolean,
  className?: string,
};
const Loading = ({ lg, className }: LoadingProps) => {
  const classes = classnames('loading', {
    'loading-lg': lg,
  }, className);
  return (
    <div className={classes} />
  );
};
Loading.defaultProps = {
  lg: false,
  className: '',
};

export default Loading;
