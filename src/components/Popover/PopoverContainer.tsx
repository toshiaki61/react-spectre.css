import React, {FC} from 'react'

import cx from 'classnames'

import {PopoverPartProps} from './interfaces'

const PopoverContainer: FC<PopoverPartProps> = ({children, className}) => (
  <div className={cx('popover-container', className)}>{children}</div>
)

export default PopoverContainer
