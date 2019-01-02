import React, {Fragment, ReactElement} from 'react'

import cx from 'classnames'

import {PopoverProps} from './interfaces'

import PopoverContainer from './PopoverContainer'

const Popover = ({
  target,
  content,
  children,
  position,
  className,
}: PopoverProps): ReactElement<PopoverProps> => (
  <div
    className={cx('popover', className, {
      [`popover-${position}`]: position,
    })}
  >
    {children ? (
      children
    ) : (
      <Fragment>
        {target}
        <PopoverContainer>{content}</PopoverContainer>
      </Fragment>
    )}
  </div>
)

Popover.defaultProps = {
  right: false,
  left: false,
  bottom: false,
  className: '',
}
export default Popover
