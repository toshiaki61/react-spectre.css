import * as React from 'react'

import cx from 'clsx'

import {ButtonGroupProps} from './interfaces'

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  block,
}) => (
  <div className={cx('btn-group', {'btn-group-block': block}, className)}>
    {children}
  </div>
)

export default ButtonGroup
