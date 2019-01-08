import React, {FC, Fragment} from 'react'

import cx from 'classnames'

import {PopoverProps} from './interfaces'
import {hasPopoverChildren} from './util'

import PopoverContainer from './PopoverContainer'

function renderPopover(p: PopoverProps) {
  if (hasPopoverChildren(p)) {
    return p.children
  }
  return (
    <Fragment>
      {p.target}
      <PopoverContainer>{p.content}</PopoverContainer>
    </Fragment>
  )
}
const Popover: FC<PopoverProps> = (p: PopoverProps) => (
  <div
    className={cx('popover', p.className, {
      [`popover-${p.position}`]: p.position,
    })}
  >
    {renderPopover(p)}
  </div>
)

export default Popover
