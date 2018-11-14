import classnames from 'classnames'
import React, {ReactElement} from 'react'

export interface IPopoverProps {
  target: ReactElement<any>
  children: ReactElement<any>
  right?: boolean
  left?: boolean
  bottom?: boolean
  className?: string
}

const Popover = ({
  target,
  children,
  right,
  left,
  bottom,
  className,
}: IPopoverProps): ReactElement<IPopoverProps> => {
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
