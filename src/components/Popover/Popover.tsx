import React, {FC, Fragment} from 'react'

import cx from 'classnames'

import {PopoverProps} from './interfaces'

import PopoverContainer from './PopoverContainer'

const Popover: FC<PopoverProps> = ({
  target,
  content,
  children,
  position,
  className,
}) => (
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

export default Popover
