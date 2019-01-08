import React, {FC} from 'react'

import cx from 'classnames'

import {ButtonGroupProps} from './interfaces'

const ButtonGroup: FC<ButtonGroupProps> = ({children, className, block}) => (
  <div className={cx('btn-group', {'btn-group-block': block}, className)}>
    {children}
  </div>
)

export default ButtonGroup
