import React, {SFC} from 'react'

import cx from 'classnames'

import {ButtonGroupProps} from './interfaces'

const ButtonGroup: SFC<ButtonGroupProps> = ({children, className, block}) => (
  <div className={cx('btn-group', {'btn-group-block': block}, className)}>
    {children}
  </div>
)

export default ButtonGroup
