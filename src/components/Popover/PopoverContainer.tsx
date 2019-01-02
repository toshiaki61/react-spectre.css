import React from 'react'

import cx from 'classnames'

import {PopoverPartProps} from './interfaces'

const PopoverContainer = ({children, className}: PopoverPartProps) => (
  <div className={cx('popover-container', className)}>{children}</div>
)

export default PopoverContainer
