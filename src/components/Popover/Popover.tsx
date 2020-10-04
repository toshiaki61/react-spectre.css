import * as React from 'react'

import cx from 'clsx'

import {PopoverProps} from './interfaces'
import {hasPopoverChildren} from './util'

import PopoverContainer from './PopoverContainer'

function renderPopover(p: PopoverProps) {
  if (hasPopoverChildren(p)) {
    return p.children
  }
  return (
    <React.Fragment>
      {p.target}
      <PopoverContainer>{p.content}</PopoverContainer>
    </React.Fragment>
  )
}
const Popover: React.FC<PopoverProps> = (p: PopoverProps) => (
  <div
    className={cx('popover', p.className, {
      [`popover-${p.position}`]: p.position,
    })}
  >
    {renderPopover(p)}
  </div>
)

export default Popover
