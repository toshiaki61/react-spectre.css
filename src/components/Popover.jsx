/* @flow */
import React from 'react';
import classnames from 'classnames';

export type PopoverProps = {
  target: React.DOM,
  children: React.DOM,
  right?: boolean,
  left?: boolean,
  bottom?: boolean,
};
const Popover = ({ target, children, right, left, bottom }: PopoverProps) => {
  const classes = classnames('popover', {
    'popover-right': right,
    'popover-left': left,
    'popover-bottom': bottom,
  });
  return (
    <div className={classes}>
      {target}
      <div className="popover-container">
        {children}
      </div>
    </div>
  );
};
Popover.defaultProps = {
  right: false,
  left: false,
  bottom: false,
};

export default Popover;
