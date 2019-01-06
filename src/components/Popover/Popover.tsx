import React, {Fragment, SFC} from 'react'

import cx from 'classnames'

import {PopoverProps} from './interfaces'

import PopoverContainer from './PopoverContainer'

const Popover: SFC<PopoverProps> = ({
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
