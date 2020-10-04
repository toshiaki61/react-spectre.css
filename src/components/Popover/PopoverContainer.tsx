import * as React from 'react'

import cx from 'clsx'

import {PopoverPartProps} from './interfaces'

const PopoverContainer: React.FC<PopoverPartProps> = ({
  children,
  className,
}) => <div className={cx('popover-container', className)}>{children}</div>

export default PopoverContainer
