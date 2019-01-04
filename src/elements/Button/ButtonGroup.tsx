import React from 'react'

import cx from 'classnames'

import {ButtonGroupProps} from './interfaces'

const ButtonGroup = ({children, className, block}: ButtonGroupProps) => (
  <div className={cx('btn-group', {'btn-group-block': block}, className)}>
    {children}
  </div>
)
ButtonGroup.defaultProps = {
  className: '',
  block: false,
}

export default ButtonGroup
