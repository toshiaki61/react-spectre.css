/* @flow */
import React from 'react';
import classnames from 'classnames';

export type LoadingProps = {
  large?: boolean,
  className?: string,
};
const Loading = ({large, className }: LoadingProps) => {
  const classes = classnames('loading', {
    'loading-lg': large,
  }, className);
  return (
    <div className={classes} />
  );
};
Loading.defaultProps = {
  large: false,
  className: '',
};

export default Loading;
