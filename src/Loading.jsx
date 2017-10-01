/* @flow */
import React from 'react';
import classnames from 'classnames';

export type LoadingProps = {
  className: string,
  lg: boolean,
};
const Loading = ({ className, lg, ...props }: LoadingProps) => {
  const classes = classnames('loading', {
    'loading-lg': lg,
  }, className);
  return (
    <div className={classes} {...props} />
  );
};
Loading.defaultProps = {
  className: '',
  lg: false,
};

export default Loading;
