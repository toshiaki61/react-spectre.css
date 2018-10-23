/* @flow */
import * as React from 'react'
import classnames from 'classnames'

export type PopoverProps = {
  target: React.DOM,
  children: React.DOM,
  right?: boolean,
  left?: boolean,
  bottom?: boolean,
  className?: string,
}
const Popover = ({
  target,
  children,
  right,
  left,
  bottom,
  className,
}: PopoverProps): React.Element<*> => {
  const classes = classnames('popover', className, {
    'popover-right': right,
    'popover-left': left,
    'popover-bottom': bottom,
  })
  return (
    <div className={classes}>
      {target}
      <div className="popover-container">{children}</div>
    </div>
  )
}
Popover.defaultProps = {
  right: false,
  left: false,
  bottom: false,
  className: '',
}

export default Popover
