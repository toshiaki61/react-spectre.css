/* @flow */
import React from 'react';
import classnames from 'classnames';

export type DividerProps = {
  content: string,
  vertical: boolean,
  li: boolean,
  center: boolean,
  className: string,
};
const Divider = ({ content, vertical, li, center, className }: DividerProps) => {
  const classes = classnames({
    divider: !vertical,
    'divider-vert': vertical,
    'text-center': center,
  }, className);
  if (li) {
    return <li className={classes} data-content={content} />;
  }
  return (
    <div className={classes} data-content={content} />
  );
};
Divider.defaultProps = {
  content: '',
  vertical: false,
  li: false,
  center: false,
  className: '',
};

export default Divider;
